import React, { Component } from 'react';
import TeamMem from './TeamMem/TeamMem';

export default class Team extends Component {
	state = { showmore: false };
	toggleShow = () => {
		this.setState((prevState) => {
			return {
				showmore: !prevState.showmore
			};
		});
	};

	renderTeamMems() {
		const { showmore } = this.state;
		const { teammems } = this.props;
		if (teammems.length > 21) {
			return (
				<div className="row inline-columns">
					{teammems.map((mem, i) => {
						if (!showmore) {
							if (i < 21) {
								return <TeamMem key={mem.id} mem={mem} />;
							}
							return null;
						}
						return <TeamMem key={mem.id} mem={mem} />;
					})}
					<div className="col-lg-12" style={{ marginTop: 35 }}>
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
			<div className="row inline-columns">
				{this.props.teammems.map((mem) => <TeamMem key={mem.id} mem={mem} />)}
			</div>
		);
	}

	render() {
		const { teammems } = this.props;
		return (
			<section
				id="team"
				className="front-page-section"
				style={{ paddingBottom: 0, paddingTop: 65, background: '#fff' }}
			>
				<div className="section-header" style={{ marginBottom: 55 }}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="title">Team</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="container">{teammems.length ? this.renderTeamMems() : null}</div>
				</div>
			</section>
		);
	}
}
