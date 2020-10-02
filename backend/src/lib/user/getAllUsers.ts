import { queryUsers } from '../../db/user/queryUsers';
import { queryUserAccounts } from '../../db/userAccounts/queryUserAccounts';
import { User } from '../../models/User.model';
import { perhaps } from '../../utils/perhaps';
import { NotFoundError } from '../errors';
import { addAccountsToUser } from './addAccountsToUser';

export const getAllUsers = async (): Promise<User[]> => {
	const [queryError, usersQuery] = await perhaps(queryUsers());

	if (queryError) {
		throw new Error('Could not find users right now');
	}

	if (!usersQuery) {
		throw new NotFoundError('No users could be found');
	}

	const [userAccountsError, userAccounts] = await perhaps(
		queryUserAccounts(usersQuery)
	);

	if (userAccountsError) {
		throw new Error('Could not access accounts at this time');
	}

	const joinedUsers = usersQuery.map((user) =>
		addAccountsToUser(user, userAccounts)
	);

	return joinedUsers;
};
