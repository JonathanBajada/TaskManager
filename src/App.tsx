import './App.css';
import LoginPage from './components/LoginPage';

function App() {
	return (
		<div className='h-screen w-full flex flex-col bg-gray-500'>
			<main className='flex-1 flex justify-center items-center'>
				<LoginPage />
			</main>
		</div>
	);
}

export default App;
