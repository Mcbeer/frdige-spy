import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import {
	GenericProduct,
	PostProduct,
	PostProductTypes,
} from '../../models/Product.model';
import { logger } from '../../utils/logger';

export const addGenericProduct = (
	product: PostProduct
): Promise<GenericProduct> => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { type, ...rest } = product;
	return database(tableNames.generic_product)
		.insert({
			...rest,
		})
		.returning('*')
		.then((data) => ({ ...data[0], type: PostProductTypes.GENERIC }))
		.catch((err) => {
			logger.error(err);
			throw new Error('Are you sure the account or location exists?');
		});
};
