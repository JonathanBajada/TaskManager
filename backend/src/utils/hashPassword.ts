// TODO: Implement password hashing utility
// Use bcrypt or similar library

export const hashPassword = async (password: string): Promise<string> => {
	// TODO: Hash password using bcrypt
	// const saltRounds = 10;
	// return bcrypt.hash(password, saltRounds);
	throw new Error('Not implemented');
};

export const comparePassword = async (
	password: string,
	hash: string
): Promise<boolean> => {
	// TODO: Compare password with hash using bcrypt
	// return bcrypt.compare(password, hash);
	throw new Error('Not implemented');
};

