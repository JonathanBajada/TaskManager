// TODO: Implement JWT token generation utility
// Use jsonwebtoken library

export const generateToken = (payload: {
	userId: string;
	email: string;
}): string => {
	// TODO: Generate JWT token
	// const secret = process.env.JWT_SECRET;
	// const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
	// return jwt.sign(payload, secret, { expiresIn });
	throw new Error('Not implemented');
};

export const verifyToken = (token: string): {
	userId: string;
	email: string;
} => {
	// TODO: Verify and decode JWT token
	// const secret = process.env.JWT_SECRET;
	// return jwt.verify(token, secret) as { userId: string; email: string };
	throw new Error('Not implemented');
};

