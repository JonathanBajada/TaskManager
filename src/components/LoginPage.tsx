import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
	email: string;
	password: string;
}

const LoginPage = () => {
	const [authError, setAuthError] = useState<string>('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		setAuthError(''); // Clear previous errors

		// Simulate authentication check
		// Replace this with your actual authentication logic
		const isValidCredentials =
			data.email === 'user@example.com' && data.password === 'password123';

		if (!isValidCredentials) {
			setAuthError('Incorrect email or password. Please try again.');
			return;
		}

		// Success - proceed with login
		console.log('Login successful:', data);
		// Add your navigation or success logic here
	};

	return (
		<div className='flex flex-col h-full w-[500px] bg-red-500'>
			<div className='flex flex-col items-center justify-center bg-cyan-500 p-4'>
				<h1 className='text-white text-2xl font-bold text-center'>
					Task Manager
				</h1>
				<p className='text-white text-sm text-center'>
					Manage your work efficiently
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-4 p-6 bg-white w-full'
			>
				{authError && (
					<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm'>
						{authError}
					</div>
				)}

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='email'
						className='text-sm font-medium text-gray-700'
					>
						Email
					</label>
					<input
						id='email'
						type='email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						})}
						className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
							errors.email
								? 'border-red-300 focus:ring-red-500'
								: 'border-gray-300'
						}`}
						placeholder='Enter your email'
					/>
					{errors.email && (
						<span className='text-red-500 text-sm'>
							{errors.email.message}
						</span>
					)}
				</div>

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='password'
						className='text-sm font-medium text-gray-700'
					>
						Password
					</label>
					<input
						id='password'
						type='password'
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters',
							},
						})}
						className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
							errors.password
								? 'border-red-300 focus:ring-red-500'
								: 'border-gray-300'
						}`}
						placeholder='Enter your password'
					/>
					{errors.password && (
						<span className='text-red-500 text-sm'>
							{errors.password.message}
						</span>
					)}
				</div>

				<button
					type='submit'
					className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium mt-2'
				>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
