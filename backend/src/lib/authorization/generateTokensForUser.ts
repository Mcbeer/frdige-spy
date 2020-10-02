import * as jwt from 'jsonwebtoken';
import { GeneratedTokens, Token } from '../../models/User.model';

export const generateTokensForUser = async ({
	id,
	googleId,
}: {
	id: number;
	googleId: string;
}): Promise<GeneratedTokens> => {
	const access_token = generateToken('access', { id, googleId });
	const refresh_token = generateToken('refresh', { id, googleId });

	return {
		access_token,
		refresh_token,
	};
};

export const generateToken = (
	type: string,
	data: { id: number; googleId: string }
): Token => {
	if (type === 'access') {
		return jwt.sign(data, process.env.JWT_TOKEN_SECRET, {
			algorithm: 'HS512',
			expiresIn: process.env.ACCESS_TOKEN_EXIPIRATION,
			issuer: process.env.TOKEN_ISSUER,
		});
	} else if (type === 'refresh') {
		return jwt.sign(data, process.env.JWT_TOKEN_SECRET, {
			algorithm: 'HS256',
			expiresIn: '1y',
			issuer: process.env.TOKEN_ISSUER,
		});
	}
};
