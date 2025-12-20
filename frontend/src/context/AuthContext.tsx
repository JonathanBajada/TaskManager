import { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

// TODO: Implement AuthContext
// Provide authentication state and functions to entire app

interface AuthContextType {
	isAuthenticated: boolean;
	isLoading: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const auth = useAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuthContext must be used within AuthProvider');
	}
	return context;
};

