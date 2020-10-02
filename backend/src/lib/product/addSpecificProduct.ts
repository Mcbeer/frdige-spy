import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import { PostProduct, Product } from '../../models/Product.model';

export const addSpecificProduct = (product: PostProduct): Promise<Product> => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { type, ...rest } = product;
	return database(tableNames.product)
		.insert({
			...rest,
		})
		.returning('*')
		.then((data) => data[0]);
};
