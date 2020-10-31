import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';

export const getUserAccounts = ({
	user_id,
}: {
	user_id: number;
}): Promise<number[]> => {
	return database(tableNames.user_account)
		.where({ user_id })
		.then((result) => {
			if (result.length > 0) {
				return result.map((res) => res.account_id);
			} else {
				return [];
			}
		})
		.catch((err) => {
			console.error(err);
			throw new Error(err);
		});
};
