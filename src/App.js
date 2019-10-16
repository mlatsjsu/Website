import React from 'react';
import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Schedules from './components/Activity/Schedules/Schedules';
import Banner from './components/Banner/Banner';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<Header />
			<Mission />
			<Banner />
			<Schedules />
			<Team />
			<Footer />
		</div>
	);
}

export default App;
