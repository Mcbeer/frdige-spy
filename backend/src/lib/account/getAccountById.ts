import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import { Account } from '../../models/Account.model';

export const getAccountById = async ({
	id,
}: {
	id: number;
}): Promise<Account> => {
	return database(tableNames.account).where({ id }).first();
};
