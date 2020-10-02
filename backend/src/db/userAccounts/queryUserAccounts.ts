import { User, UserAccountRelation } from '../../models/User.model';
import database from '../connection';
import { tableNames } from '../tableNames';

export const queryUserAccounts = (
	users: User[]
): Promise<UserAccountRelation[]> => {
	const userIds = users.map((user) => user.id);

	return database(tableNames.user_account).whereIn('user_id', userIds);
};
