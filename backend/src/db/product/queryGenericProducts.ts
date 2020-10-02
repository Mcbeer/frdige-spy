import { GenericProduct } from '../../models/Product.model';
import database from '../connection';
import { tableNames } from '../tableNames';

type QueryGenericProductsArgs = {
	accountId?: number;
	locationId?: number;
};

export const queryGenericProducts = ({
	accountId,
	locationId,
}: QueryGenericProductsArgs): Promise<GenericProduct[]> => {
	const byAccountId = (queryBuilder) => {
		if (accountId) {
			queryBuilder.where({ account_id: accountId });
		}
	};

	const byLocationId = (queryBuilder) => {
		if (locationId) {
			queryBuilder.where({ location_id: locationId });
		}
	};

	return database(tableNames.generic_product)
		.modify(byAccountId)
		.modify(byLocationId);
};
