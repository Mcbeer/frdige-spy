import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import { GoogleAuthProfileObj } from '../../models/GoogleAuth.model';
import { User } from '../../models/User.model';

export const createNewUser = (
	profileObj: GoogleAuthProfileObj
): Promise<User> => {
	const formattedUserForDB = createNewDbUser(profileObj);
	return database(tableNames.user).insert(formattedUserForDB).returning('*');
};

const createNewDbUser = (profileObj: GoogleAuthProfileObj): User => {
	return {
		google_id: profileObj.googleId,
		name: profileObj.name,
		avatar_url: profileObj.imageUrl,
		email: profileObj.email,
	};
};
