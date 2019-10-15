import React, { Component } from 'react';
import Meeting from './Meeting/Meeting';

export default class Schedule extends Component {
	state = { meetings: [], showmore: false };

	toggleShow = () => {
		this.setState((prevState) => {
			return {
				showmore: !prevState.showmore
			};
		});
	};

	renderMeetings() {
		// const { meetings } = this.state;
		// return meetings.map((meeting: any) => <Meeting key={meeting.id} meeting={meeting} />);
		const { showmore } = this.state;
		const { meetings } = this.props;
		if (meetings.length > 4) {
			return (
				<div className="row">
					{meetings.map((meeting, i) => {
						if (!showmore) {
							if (i < 4) {
								return <Meeting key={meeting.id} meeting={meeting} />;
							}
							return null;
						}
						return <Meeting key={meeting.id} meeting={meeting} />;
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
			<div className="row">{meetings.map((meeting) => <Meeting key={meeting.id} meeting={meeting} />)}</div>
		);
	}

	render() {
		return <div className="container">{this.renderMeetings()}</div>;
	}
}
