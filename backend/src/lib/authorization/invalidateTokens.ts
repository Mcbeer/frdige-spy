import { Response } from 'express';
import { cookieOptions } from '../../utils/cookieOptions';

export const invalidateTokens = (res: Response): void => {
	res.cookie('access_token', null, {
		...cookieOptions,
		maxAge: null,
	});
	res.cookie('refresh_token', null, {
		...cookieOptions,
		maxAge: null,
	});
};
