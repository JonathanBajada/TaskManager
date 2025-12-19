import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
	email: string;
	password: string;
}

const LoginPage = () => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
						{...register('email', { required: true, maxLength: 20 })}
						className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						placeholder='Enter your email'
					/>
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
						{...register('password', { pattern: /^[A-Za-z]+$/i })}
						className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						placeholder='Enter your password'
					/>
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
