import { User } from '../../models/User.model';
import database from '../connection';
import { tableNames } from '../tableNames';

export const queryUsers = (): Promise<User[]> => {
	return database(tableNames.user);
};
