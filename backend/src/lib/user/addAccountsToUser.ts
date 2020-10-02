import { compact } from 'lodash';
import { User, UserAccountRelation } from '../../models/User.model';

export const addAccountsToUser = (
	user: User,
	accounts: UserAccountRelation[]
): User => {
	const usersAccounts = accounts.map((account) => {
		if (account.user_id === user.id) {
			return {
				account_id: account.account_id,
				role: account.role,
			};
		}
	});
	return {
		...user,
		accounts: compact(usersAccounts),
	};
};
