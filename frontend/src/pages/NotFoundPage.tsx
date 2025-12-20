import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='text-4xl font-bold mb-4'>404</h1>
			<p className='text-gray-600 mb-4'>Page not found</p>
			<Link to='/login' className='text-blue-500 hover:underline'>
				Go to Login
			</Link>
		</div>
	);
};

export default NotFoundPage;

