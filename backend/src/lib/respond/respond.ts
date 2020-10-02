/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import {
	AuthenticationError,
	InvalidInputError,
	NotFoundError,
} from '../errors';

type ResponseDataArgs = {
	status?: string;
	data?: any;
	message?: string;
	code?: number;
};

type Respond = {
	send: (responseData: ResponseDataArgs) => void;
	sendSuccess: (data: any) => void;
	sendError: (
		error: Error | NotFoundError | AuthenticationError | InvalidInputError
	) => void;
	sendMessage: (message: string) => void;
};

export const respond = (res: Response): Respond => {
	const send = (responseData: ResponseDataArgs) => {
		const status = responseData?.status || 'Success';
		const data = responseData?.data ? responseData.data : null;
		const message = responseData?.message || null;
		const code = responseData?.code || 200;

		if (!res.headersSent) {
			res.status(code).json({ status, message, data });
		}
	};

	const sendMessage = (message: string) => {
		send({ message });
	};

	const sendSuccess = (data: any) => {
		send({ data });
	};

	function sendError(error: Error) {
		const status = error.name;
		const message: string = error.message || JSON.stringify(error.message);
		let code = 500;

		if (error.name === 'AuthenticationError') {
			code = 401;
		}

		if (error.name === 'NotFoundError') {
			code = 404;
		}

		if (error.name === 'InvalidInputError') {
			code = 422;
		}

		send({ status, message, code });
	}

	return {
		send,
		sendSuccess,
		sendError,
		sendMessage,
	};
};
