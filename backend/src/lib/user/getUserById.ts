import { queryUser } from '../../db/user/queryUser';
import { queryUserAccounts } from '../../db/userAccounts/queryUserAccounts';
import { User } from '../../models/User.model';
import { perhaps } from '../../utils/perhaps';
import { NotFoundError } from '../errors/index';
import { addAccountsToUser } from './addAccountsToUser';

export const getUserById = async (userId: number): Promise<User> => {
	const [queryError, userFromDb] = await perhaps(queryUser(userId));

	if (queryError) {
		throw new Error('#1 - Could not get user information at this time');
	}

	if (!userFromDb) {
		throw new NotFoundError('User not found');
	}

	const [queryAccountsError, userAccounts] = await perhaps(
		queryUserAccounts([userFromDb])
	);

	if (queryAccountsError) {
		throw new Error('#2 - Could not get user information at this time');
	}

	return addAccountsToUser(userFromDb, userAccounts);
};
