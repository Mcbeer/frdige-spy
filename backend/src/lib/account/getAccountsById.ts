import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import { Account } from '../../models/Account.model';

export const getAccountsById = async ({
	ids,
}: {
	ids: number[];
}): Promise<Account[]> => {
	if (ids.length > 0) {
		return database(tableNames.account).whereIn(ids);
	} else {
		return [];
	}
};
