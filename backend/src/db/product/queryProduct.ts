import { Product } from '../../models/Product.model';
import database from '../connection';
import { tableNames } from '../tableNames';

type QueryProductArgs = {
	genericProductId?: number;
};

export const queryProduct = ({
	genericProductId,
}: QueryProductArgs): Promise<Product[]> => {
	const byGenericProductId = (queryBuilder) => {
		queryBuilder.where({ generic_product_id: genericProductId });
	};

	return database(tableNames.product).modify(
		genericProductId ? byGenericProductId : null
	);
};
