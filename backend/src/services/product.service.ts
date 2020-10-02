/* eslint-disable no-case-declarations */
import { Router } from 'express';
import { isFinite, toNumber } from 'lodash';
import { addGenericProduct } from '../lib/product/addGenericProduct';
import { addSpecificProduct } from '../lib/product/addSpecificProduct';
import { getProducts } from '../lib/product/getProducts';
import { respond } from '../lib/respond/respond';
import { PostProduct, PostProductTypes } from '../models/Product.model';
import { perhaps } from '../utils/perhaps';

const router = Router();

router.get('/', async (req, res, next) => {
	const accountIdAsNumber = toNumber(req?.query?.accountId);
	const locationIdAsNumber = toNumber(req?.query?.locationId);

	const accountId = isFinite(accountIdAsNumber) ? accountIdAsNumber : null;
	const locationId = isFinite(locationIdAsNumber) ? locationIdAsNumber : null;

	const [productsError, products] = await perhaps(
		getProducts({ accountId, locationId })
	);

	if (productsError) {
		console.error(productsError);
		next(new Error('Could not get to your products at this time.'));
	}

	res.json(products);
});

router.post('/', async (req, res, next) => {
	console.log('Posting new product...');
	const { body }: { body: PostProduct } = req;
	switch (body.type) {
		case PostProductTypes.GENERIC:
			const [genericError, genericProduct] = await perhaps(
				addGenericProduct(body)
			);

			if (genericError) {
				respond(res).sendError(genericError);
			}

			respond(res).sendSuccess(genericProduct);

			break;
		case PostProductTypes.SPECIFIC:
			return addSpecificProduct(body);

		default:
			return next(new Error('Thats not a kind of product?'));
	}
});

export { router as productService };
