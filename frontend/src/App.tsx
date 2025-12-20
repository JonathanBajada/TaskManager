import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='h-screen w-full flex flex-col bg-gray-500'>
			<main className='flex-1 flex justify-center items-center'>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
