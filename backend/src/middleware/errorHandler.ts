/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'express-json-validator-middleware';
import {
	AuthenticationError,
	InvalidInputError,
	NotFoundError,
} from '../lib/errors';
import { respond } from '../lib/respond/respond';

export default (
	err:
		| Error
		| NotFoundError
		| AuthenticationError
		| ValidationError
		| InvalidInputError,
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err) {
		if (err instanceof ValidationError) {
			const formattedError = new InvalidInputError(
				'Input invalid, please fill in all the required information'
			);
			respond(res).sendError(formattedError);
		} else {
			respond(res).sendError(err);
		}
	} else {
		next();
	}
};
