import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	email: string;
	password: string;
};

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		// Handle login logic here
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
				className='flex flex-col gap-4 p-6 bg-white'
			>
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
						className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
						className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
					className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium'
				>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
