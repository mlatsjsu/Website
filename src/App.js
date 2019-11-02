import React from 'react';
import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Schedules from './components/Activity/Schedules/Schedules';
import Projects from './components/Activity/Projects/Projects';
import Banner from './components/Banner/Banner';
import Team from './components/Team/Team';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Footer from './components/Footer/Footer';

const App = () => (
	<div>
		<Header />
		<Mission />
		<Banner />
		<Schedules />
		<Team />
		<Projects />
		<GetInvolved />
		<Footer />
	</div>
);

export default App;
