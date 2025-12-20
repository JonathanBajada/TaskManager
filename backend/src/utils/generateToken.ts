// TODO: Implement JWT token generation utility
// Use jsonwebtoken library
import * as jwt from 'jsonwebtoken';

export const generateToken = (payload: {
	userId: string;
	email: string;
}): string => {
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error('JWT_SECRET environment variable is not set.');
	}
	const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
	const options: jwt.SignOptions = {
		expiresIn: expiresIn as jwt.SignOptions['expiresIn'],
	};
	return jwt.sign(payload, secret, options);
};

export const verifyToken = (
	token: string,
): {
	userId: string;
	email: string;
} => {
	// TODO: Verify and decode JWT token
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error('JWT_SECRET environment variable is not set.');
	}
	return jwt.verify(token, secret) as { userId: string; email: string };
};
