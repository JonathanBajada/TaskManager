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

		// TODO: Implement authentication logic
		// 1. Call authService.login(email, password)
		// 2. Handle success (store token, redirect)
		// 3. Handle errors (set authError)

		console.log('Form submitted:', data);
	};

	return (
		<div className='flex flex-col h-full w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden'>
			{/* Header Section */}
			<div className='flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-10'>
				<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg'>
					<svg
						className='w-8 h-8 text-blue-600'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
						/>
					</svg>
				</div>
				<h1 className='text-white text-3xl font-bold text-center mb-2'>
					Task Manager
				</h1>
				<p className='text-blue-100 text-sm text-center'>
					Sign in to manage your work efficiently
				</p>
			</div>

			{/* Form Section */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-6 p-8 bg-white'
			>
				{authError && (
					<div className='bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-r-md text-sm flex items-center gap-2'>
						<svg
							className='w-5 h-5 text-red-500'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
								clipRule='evenodd'
							/>
						</svg>
						{authError}
					</div>
				)}

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='email'
						className='text-sm font-semibold text-gray-700'
					>
						Email Address
					</label>
					<input
						id='email'
						type='email'
						{...register('email', {
							// TODO: Add validation rules
							// required: 'Email is required',
							// pattern: {
							//   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							//   message: 'Invalid email address',
							// },
						})}
						className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
							errors.email
								? 'border-red-300 focus:ring-red-500 bg-red-50'
								: 'border-gray-300 bg-gray-50 focus:bg-white'
						}`}
						placeholder='you@example.com'
					/>
					{errors.email && (
						<span className='text-red-500 text-sm flex items-center gap-1'>
							<svg
								className='w-4 h-4'
								fill='currentColor'
								viewBox='0 0 20 20'
							>
								<path
									fillRule='evenodd'
									d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
									clipRule='evenodd'
								/>
							</svg>
							{errors.email.message}
						</span>
					)}
				</div>

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='password'
						className='text-sm font-semibold text-gray-700'
					>
						Password
					</label>
					<input
						id='password'
						type='password'
						{...register('password', {
							// TODO: Add validation rules
							// required: 'Password is required',
							// minLength: {
							//   value: 6,
							//   message: 'Password must be at least 6 characters',
							// },
						})}
						className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
							errors.password
								? 'border-red-300 focus:ring-red-500 bg-red-50'
								: 'border-gray-300 bg-gray-50 focus:bg-white'
						}`}
						placeholder='Enter your password'
					/>
					{errors.password && (
						<span className='text-red-500 text-sm flex items-center gap-1'>
							<svg
								className='w-4 h-4'
								fill='currentColor'
								viewBox='0 0 20 20'
							>
								<path
									fillRule='evenodd'
									d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
									clipRule='evenodd'
								/>
							</svg>
							{errors.password.message}
						</span>
					)}
				</div>

				<button
					type='submit'
					className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
				>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
