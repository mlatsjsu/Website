import React, { Component } from 'react';
import Schedule from './Schedule/Schedule';

export default class Schedules extends Component {
	state = { schedules: [], showmore: false };

	async componentDidMount() {
		const scheduleRes = await fetch('https://sjsuml-cms.herokuapp.com/schedules');
		const schedules = await scheduleRes.json();
		const convertedSchedules = schedules.map((meeting) => ({
			id: meeting.id,
			date: this._convertUTCDateToLocalDate(meeting.date),
			topic: meeting.topic,
			description: meeting.description,
			location: meeting.location,
			link: meeting.link ? meeting.link : ''
		}));
		const sortedSchedules = convertedSchedules.sort((a, b) => a.date.getTime() - b.date.getTime()).reverse();
		this.setState({ schedules: sortedSchedules });
	}

	_convertUTCDateToLocalDate = (datestring) => {
		const newDate = new Date(datestring);
		const offset = newDate.getTimezoneOffset() / 60;
		const hours = newDate.getHours();
		newDate.setHours(hours + offset);

		return newDate;
	};

	toggleShow = () => {
		this.setState((prevState) => {
			return {
				showmore: !prevState.showmore
			};
		});
	};

	renderSchedules() {
		const { schedules, showmore } = this.state;
		if (schedules.length > 6) {
			return (
				<div className="row">
					{schedules.map((schedule, i) => {
						if (!showmore) {
							if (i < 6) {
								return <Schedule key={schedule.id} schedule={schedule} />;
							}
							return null;
						}
						return <Schedule key={schedule.id} schedule={schedule} />;
					})}
					<div className="col-lg-12">
						<div style={{ margin: 'auto', textAlign: 'center' }}>
							<button className="showmore" onClick={this.toggleShow}>
								{!showmore ? 'Show more' : 'Show less'}
							</button>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className="row">{schedules.map((schedule) => <Schedule key={schedule.id} schedule={schedule} />)}</div>
		);
	}

	render() {
		const { schedules } = this.state;
		if (schedules.length) {
			return (
				<section
					id="schedule"
					className="front-page-section"
					style={{
						width: '100%',
						padding: '65px 0 0',
						textAlign: 'center',
						background:
							this.props.order % 2 === 0
								? 'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
								: '#fff'
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
					<div className="section-content">
						<div className="container">{this.renderSchedules()}</div>
					</div>
				</section>
			);
		}
		return null;
	}
}
