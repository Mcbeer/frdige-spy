import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { generateToken } from '../lib/authorization/generateTokensForUser';
import { invalidateTokens } from '../lib/authorization/invalidateTokens';
import { AuthenticationError } from '../lib/errors';
import { respond } from '../lib/respond/respond';
import { getUserById } from '../lib/user/getUserById';
import { ExtendedRequest } from '../models/ExtendedRequest';
import { cookieOptions } from '../utils/cookieOptions';
import { perhaps } from '../utils/perhaps';

export const authMiddleware = async (
	req: ExtendedRequest,
	res: Response,
	next: NextFunction
): Promise<Error | void> => {
	// Check for token in cookie
	const access_token: string = req.cookies.access_token;
	const refresh_token: string = req.cookies.refresh_token;

	if (access_token) {
		let tokenError;
		let validatedAccessToken;
		jwt.verify(access_token, process.env.JWT_TOKEN_SECRET, (err, result) => {
			if (err) {
				tokenError = err;
			} else {
				validatedAccessToken = result;
			}
		});

		if (tokenError && tokenError.message.includes('expired')) {
			// Check if we have a refresh token;
			console.log(refresh_token);
			if (refresh_token) {
				const refreshTokenData = jwt.decode(refresh_token);
				console.log({ refreshTokenData });

				const { id, googleId } = refreshTokenData;

				const newAccessToken = generateToken('access', { id, googleId });

				res.cookie('access_token', newAccessToken, {
					...cookieOptions,
					maxAge: 3600 * 1000,
				});

				const [userError, user] = await perhaps(getUserById(id));
				if (userError) {
					req.user = null;
				} else {
					req.user = user;
				}

				return next();
			} else {
				invalidateTokens(res);
				return respond(res).sendError(
					new AuthenticationError(
						'Cannot validate your token, your access has been revoked. Please sign in again'
					)
				);
			}
		}

		if (tokenError && !tokenError.message.includes('expired')) {
			invalidateTokens(res);
			return respond(res).sendError(
				new AuthenticationError('Your session has ended, please sign in again.')
			);
		}

		const [userError, user] = await perhaps(
			getUserById(validatedAccessToken.id)
		);
		if (userError) {
			req.user = null;
		} else {
			req.user = user;
		}

		return next();
	} else {
		invalidateTokens(res);
		return respond(res).sendError(
			new AuthenticationError(
				'Cannot validate your token, your access has been revoked'
			)
		);
	}
};
