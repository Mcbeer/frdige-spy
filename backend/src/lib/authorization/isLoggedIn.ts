import * as jwt from 'jsonwebtoken';
import { User } from '../../models/User.model';
import { perhaps } from '../../utils/perhaps';
import { getUserById } from '../user/getUserById';

export const isLoggedIn = async (access_token: string): Promise<User> => {
	if (!access_token) {
		throw new Error('No access token');
	}

	const tokenData = jwt.decode(access_token);
	const [userError, user] = await perhaps(getUserById(tokenData.id));

	if (userError) {
		throw new Error('Could not find user, please log in again');
	}

	return user;
};
