import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Schedule from '../Schedule/Schedule';
import Team from './Team/Team';

export default class Activity extends Component {
	state = { projects: [], meetings: [], teammems: [] };

	async componentDidMount() {
		const [ projectRes, scheduleRes, teammemRes ] = await Promise.all([
			fetch('https://sjsuml-cms.herokuapp.com/projects'),
			fetch('https://sjsuml-cms.herokuapp.com/schedules'),
			fetch('https://sjsuml-cms.herokuapp.com/teammems')
		]);

		const [ projects, meetings, teammems ] = await Promise.all([
			projectRes.json(),
			scheduleRes.json(),
			teammemRes.json()
		]);

		const convertedWorkshops = meetings.map((meeting) => ({
			id: meeting.id,
			date: this._convertUTCDateToLocalDate(meeting.date),
			topic: meeting.topic,
			description: meeting.description,
			location: meeting.location,
			link: meeting.link ? meeting.link : ''
		}));
		const sortedWorkshops = convertedWorkshops.sort((a, b) => a.date.getTime() - b.date.getTime()).reverse();
		this.setState({ projects, meetings: sortedWorkshops, teammems });
	}

	_convertUTCDateToLocalDate = (datestring) => {
		const newDate = new Date(datestring);
		const offset = newDate.getTimezoneOffset() / 60;
		const hours = newDate.getHours();
		newDate.setHours(hours + offset);

		return newDate;
	};

	render() {
		const { projects, meetings, teammems } = this.state;
		return (
			<div>
				<section
					id="schedule"
					className="front-page-section"
					style={{
						width: '100%',
						padding: '65px 0 0',
						textAlign: 'center',
						backgroundImage:
							'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
					}}
				>
					<div className="section-header" style={{ marginBottom: 55 }}>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="title">Schedule</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="section-content">{meetings.length ? <Schedule meetings={meetings} /> : null}</div>
				</section>
				<section
					id="counter"
					className="front-page-section"
					style={{
						backgroundImage: `url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/front-page-counter.jpg)`,
						backgroundColor: '#000000'
					}}
				>
					<div className="counter-overlay" />
					<div className="container">
						<div className="row inline-columns">
							<div id="illdy_counter-4" className="col-sm-4 col-xs-12 widget_illdy_counter">
								{/* <span
									className="counter-number"
									data-from="1"
									data-to={projects.length}
									data-speed="1000"
									data-refresh-interval="100"
								/> */}
								<span className="counter-description">WORKSHOPS</span>
							</div>
							<div id="illdy_counter-3" className="col-sm-4 col-xs-12 widget_illdy_counter">
								{/* <span
									className="counter-number"
									data-from="1"
									data-to={meetings.length}
									data-speed="1000"
									data-refresh-interval="100"
								/> */}
								<span className="counter-description">READING GROUPS</span>
							</div>
							<div id="illdy_counter-2" className="col-sm-4 col-xs-12 widget_illdy_counter">
								{/* <span
									className="counter-number"
									data-from="1"
									data-to="159"
									data-speed="2000"
									data-refresh-interval="100"
								/> */}
								<span className="counter-description">PROJECTS</span>
							</div>
						</div>
					</div>
				</section>
				<Team teammems={teammems} />
				{/* <section
					id="projects"
					className="front-page-section"
					style={{
						backgroundImage:
							'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
					}}
				>
					<div className="section-header" style={{ marginBottom: 55 }}>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="title">Projects</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="section-content">{projects.length ? <Projects projects={projects} /> : null}</div>
				</section> */}
			</div>
		);
	}
}
