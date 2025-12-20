import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';

// TODO: Add protected route wrapper
// TODO: Add route guards for authentication

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Navigate to='/login' replace />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'dashboard',
				element: <DashboardPage />,
				// TODO: Add protected route wrapper
				// element: <ProtectedRoute><DashboardPage /></ProtectedRoute>,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
