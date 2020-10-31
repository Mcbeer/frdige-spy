/* eslint-disable no-case-declarations */
import { Router } from 'express';
import { isFinite, toNumber } from 'lodash';
import { addGenericProduct } from '../lib/product/addGenericProduct';
import { addProductEntry } from '../lib/product/addProductEntry';
import { addSpecificProduct } from '../lib/product/addSpecificProduct';
import { getProducts } from '../lib/product/getProducts';
import { respond } from '../lib/respond/respond';
import {
	PostProduct,
	PostProductEntry,
	PostProductTypes,
} from '../models/Product.model';
import { perhaps } from '../utils/perhaps';

const router = Router();

router.get('/', async (req, res) => {
	const accountIdAsNumber = toNumber(req?.query?.accountId);
	const locationIdAsNumber = toNumber(req?.query?.locationId);

	const accountId = isFinite(accountIdAsNumber) ? accountIdAsNumber : null;
	const locationId = isFinite(locationIdAsNumber) ? locationIdAsNumber : null;

	const [productsError, products] = await perhaps(
		getProducts({ accountId, locationId })
	);

	if (productsError) {
		console.error(productsError);
		respond(res).sendError(productsError);
	}

	respond(res).sendSuccess(products);
});

router.post('/', async (req, res, next) => {
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
			const [specificError, specificProduct] = await perhaps(
				addSpecificProduct(body)
			);

			if (specificError) {
				respond(res).sendError(specificError);
			}

			respond(res).sendSuccess(specificProduct);

			break;

		default:
			return next(new Error('Thats not a kind of product?'));
	}
});

router.post('/entry', async (req, res) => {
	const { body }: { body: PostProductEntry } = req;

	const [entryError, productEntry] = await perhaps(
		addProductEntry({ product_id: body.product_id, amount: body.amount })
	);

	if (entryError) {
		respond(res).sendError(entryError);
	}

	respond(res).sendSuccess(productEntry);
});

export { router as productService };
