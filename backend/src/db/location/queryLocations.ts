import { Location } from '../../models/Location.model';
import database from '../connection';
import { tableNames } from '../tableNames';

type QueryLocationsArgs = {
	accountId: number;
};

export const queryLocations = ({
	accountId,
}: QueryLocationsArgs): Promise<Location[]> => {
	const byAccountId = (queryBuilder) => {
		if (accountId) {
			queryBuilder.where({ account_id: accountId });
		}
	};

	return database(tableNames.location).modify(byAccountId);
};
