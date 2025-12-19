import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	example: string;
	exampleRequired: string;
};
const LoginPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	return (
		<div className='flex items-center justify-center h-full w-full bg-red-500'>
			<div>
				<h1 className='text-white text-2xl font-bold'>Login Page</h1>
				{/* <form onSubmit={handleSubmit(onSubmit)}>
					<input {...register('example')} />
					<input {...register('exampleRequired', { required: true })} />
					<input type='submit' />
				</form> */}
			</div>
		</div>
	);
};

export default LoginPage;
