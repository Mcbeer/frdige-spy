import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import { GoogleAuthObj } from '../../models/GoogleAuth.model';
import { User, UserWithTokens } from '../../models/User.model';
import { perhaps } from '../../utils/perhaps';
import { createNewUser } from '../user/createNewUser';
import { generateTokensForUser } from './generateTokensForUser';

export const authorizeLogin = async ({
	profileObj,
	tokenObj,
}: GoogleAuthObj): Promise<UserWithTokens> => {
	if (!tokenObj) {
		throw new Error('No token present, please try logging in again');
	}

	const [userInDBError, userInDb] = await perhaps(
		queryUserInDBByGoogleId(profileObj.googleId)
	);

	if (userInDBError) {
		throw new Error(
			'An error occured while trying to authorize you, please try again.'
		);
	}

	if (userInDb) {
		const [generateTokensError, tokens] = await perhaps(
			generateTokensForUser({ id: userInDb.id, googleId: userInDb.google_id })
		);

		if (generateTokensError) {
			throw new Error(
				'Could not grant you access to this app, at this time, please try again.'
			);
		}

		return {
			user: userInDb,
			tokens,
		};
	} else {
		// Create the user in DB, then auth them, and return user info
		const [createUserError, newUser] = await perhaps(createNewUser(profileObj));
		if (createUserError) {
			throw new Error('Could not create a new user at this time');
		}

		const [generateTokensError, tokens] = await perhaps(
			generateTokensForUser({ id: newUser.id, googleId: newUser.google_id })
		);

		if (generateTokensError) {
			throw new Error(
				'Could not grant you access to this app, at this time, please try again.'
			);
		}

		return {
			user: newUser,
			tokens,
		};
	}
};

const queryUserInDBByGoogleId = (googleId: string): Promise<User> => {
	return database(tableNames.user).where({ google_id: googleId }).first();
};
