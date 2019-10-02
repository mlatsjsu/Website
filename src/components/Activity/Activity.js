import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Schedule from '../Schedule/Schedule';

export default class Activity extends Component {
	state = { projects: [], meetings: [] };

	async componentDidMount() {
		// const projectRes = await fetch('https://sjsuml-cms.herokuapp.com/projects');
		// const projects = await projectRes.json();

		// const scheduleRes = await fetch('https://sjsuml-cms.herokuapp.com/schedules');
		// const meetings = await scheduleRes.json();

		const [ projectRes, scheduleRes ] = await Promise.all([
			fetch('https://sjsuml-cms.herokuapp.com/projects'),
			fetch('https://sjsuml-cms.herokuapp.com/schedules')
		]);

		const [ projects, meetings ] = await Promise.all([ projectRes.json(), scheduleRes.json() ]);

		const convertedWorkshops = meetings.map((meeting) => ({
			id: meeting.id,
			date: this._convertUTCDateToLocalDate(meeting.date),
			topic: meeting.topic,
			description: meeting.description,
			location: meeting.location,
			link: meeting.link ? meeting.link : ''
		}));
		const sortedWorkshops = convertedWorkshops.sort((a, b) => a.date.getTime() - b.date.getTime()).reverse();
		this.setState({ projects, meetings: sortedWorkshops });
	}

	_convertUTCDateToLocalDate = (datestring) => {
		const newDate = new Date(datestring);
		const offset = newDate.getTimezoneOffset() / 60;
		const hours = newDate.getHours();
		newDate.setHours(hours + offset);

		return newDate;
	};

	render() {
		const { projects, meetings } = this.state;
		return (
			<div>
				<section id="projects" className="front-page-section">
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
								<span
									className="counter-number"
									data-from="1"
									data-to={projects.length}
									data-speed="1000"
									data-refresh-interval="100"
								/>
								<span className="counter-description">Projects</span>
							</div>
							<div id="illdy_counter-3" className="col-sm-4 col-xs-12 widget_illdy_counter">
								<span
									className="counter-number"
									data-from="1"
									data-to={meetings.length}
									data-speed="1000"
									data-refresh-interval="100"
								/>
								<span className="counter-description">Workshops</span>
							</div>
							<div id="illdy_counter-2" className="col-sm-4 col-xs-12 widget_illdy_counter">
								<span
									className="counter-number"
									data-from="1"
									data-to="159"
									data-speed="2000"
									data-refresh-interval="100"
								/>
								<span className="counter-description">Members</span>
							</div>
						</div>
					</div>
				</section>
				<section
					id="schedule"
					className="front-page-section"
					style={{ width: '100%', padding: '65px 0 0', textAlign: 'center' }}
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
			</div>
		);
	}
}
