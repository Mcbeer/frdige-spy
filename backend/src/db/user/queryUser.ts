import { User } from '../../models/User.model';
import database from '../connection';
import { tableNames } from '../tableNames';

export const queryUser = (userId: number): Promise<User> => {
	return database(tableNames.user).where({ id: userId }).first();
};
