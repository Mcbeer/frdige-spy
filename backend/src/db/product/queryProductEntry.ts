import { ProductEntry } from '../../models/Product.model';
import database from '../connection';
import { tableNames } from '../tableNames';

type QueryProductEntryArgs = {
	productIds?: string[];
};

export const queryProductEntry = ({
	productIds,
}: QueryProductEntryArgs): Promise<ProductEntry[]> => {
	const byProductId = (queryBuilder) => {
		queryBuilder.whereIn('product_id', productIds);
	};

	const byNotTaken = (queryBuilder) => {
		queryBuilder.where({ use_date: null });
	};

	return database(tableNames.product_entry)
		.modify(byProductId)
		.modify(byNotTaken);
};
