import './App.css';

function App() {
	const weatherForecasts = [
		{
			day: 'Mon',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
			imgAlt: 'sun icon',
			conditions: 'sunny',
			time: 'Morning',
		},
		{
			day: 'Tue',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
			imgAlt: 'moon icon',
			conditions: 'clear',
			time: 'Night',
		},
		{
			day: 'Wed',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
			imgAlt: 'clouds with lightning icon',
			conditions: 'stormy',
			time: 'All Day',
		},
		{
			day: 'Thu',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
			imgAlt: 'sun overcast by clouds icon',
			conditions: 'overcast',
			time: 'Evening',
		},
		{
			day: 'Fri',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
			imgAlt: 'moon overcast by clouds icon',
			conditions: 'cloudy',
			time: 'Night',
		},
	];

	return (
		<>
			<div>
				<a
					href='https://vitejs.dev'
					target='_blank'
				>
					<img
						src={viteLogo}
						className='logo'
						alt='Vite logo'
					/>
				</a>
				<a
					href='https://react.dev'
					target='_blank'
				>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
