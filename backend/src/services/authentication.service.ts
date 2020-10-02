import { NextFunction, Response, Router } from 'express';
import { authorizeLogin } from '../lib/authorization/authorizeLogin';
import { isLoggedIn } from '../lib/authorization/isLoggedIn';
import { authMiddleware } from '../middleware/authMiddleware';
import { ExtendedRequest } from '../models/ExtendedRequest';
import { cookieOptions } from '../utils/cookieOptions';
import { perhaps } from '../utils/perhaps';

const router = Router();

router.post(
	'/',
	async (
		req: ExtendedRequest,
		res: Response,
		next: NextFunction
	): Promise<void> => {
		res.header('Access-Control-Allow-Origin', req.headers.origin);
		const profileObj = req.body.profileObj;
		const tokenObj = req.body.tokenObj;

		const [authorizeError, { user, tokens }] = await perhaps(
			authorizeLogin({
				profileObj,
				tokenObj,
			})
		);

		if (authorizeError) {
			res.statusCode = 500;
			res.json(authorizeError);
		}

		if (!user) {
			next(Error('Could not find or create user, please try again.'));
		}

		// Set tokens in cookies
		res.cookie('access_token', tokens.access_token, {
			...cookieOptions,
			maxAge: 3600 * 1000,
		});
		res.cookie('refresh_token', tokens.refresh_token, {
			...cookieOptions,
			maxAge: 31556926 * 1000,
		});

		res.json(user);
	}
);

router.get(
	'/authstatus',
	authMiddleware,
	async (req: ExtendedRequest, res: Response): Promise<void> => {
		const access_token = req.cookies.access_token;
		const user = await isLoggedIn(access_token);
		console.log('#53', user);
		res.json(user);
	}
);

export { router as authenticationService };
