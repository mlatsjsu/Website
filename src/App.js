import React from 'react';

import { Helmet } from "react-helmet";
import thumbnail from './thumbnail.png';

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
		<Helmet>
			<meta
				name="description"
				content="Machine Learning at SJSU is a Recognized Student Organization at San Jose State University. We host machine learning workshops, reading groups, guest speakers, and projects. Furthermore, we actively encourage diversity in the field to create a community capable of tackling globally relevant problems."
			/>
			<meta
				name="keywords"
				content="Machine Learning,SJSU,SJSU Machine Learning,ML@SJSU,AI,Artificial Intelligence,Natural Language Processing,NLP,Computer Vision,Neural Networks,Deep Learning,Big Data,Science,STEM,Diversity"
			/>
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="ML@SJSU - Machine Learning Club" />
			<meta property="og:image" content={thumbnail} />
			<meta
				property="og:description"
				content="Machine Learning at SJSU is a Recognized Student Organization at San Jose State University. We host machine learning workshops, reading groups, guest speakers, and projects. Furthermore, we actively encourage diversity in the field to create a community capable of tackling globally relevant problems."
			/>
			<meta property="og:site_name" content="ML@SJSU - Machine Learning Club" />
			<meta property="og:url" content="https://mlatsjsu.club/" />

			<meta name="twitter:title" content="ML@SJSU - Machine Learning Club" />
			<meta property="twitter:image" content={thumbnail} />
			<meta
				property="twitter:description"
				content="Machine Learning at SJSU is a Recognized Student Organization at San Jose State University. We host machine learning workshops, reading groups, guest speakers, and projects. Furthermore, we actively encourage diversity in the field to create a community capable of tackling globally relevant problems."
			/>
			<meta property="twitter:url" content="https://mlatsjsu.club/" />
		</Helmet>
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
