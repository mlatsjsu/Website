import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TeamMem from './TeamMem/TeamMem';

export default class Team extends Component {
	state = { teammems: [] };

	async componentDidMount() {
		const teammemRes = await fetch('https://sjsuml-cms.herokuapp.com/teammems');
		const teammems = await teammemRes.json();
		const teammemSorted = teammems.sort((a, b) => a.order - b.order);

		this.setState({ teammems: teammemSorted });
	}

	renderTeamMems() {
		const { teammems } = this.state;
		return <div className="row inline-columns">{teammems.map((mem) => <TeamMem key={mem.id} mem={mem} />)}</div>;
	}

	render() {
		const { teammems } = this.state;
		if (teammems.length) {
			return (
				<section
					id="team"
					className="front-page-section"
					style={{ paddingBottom: 40, paddingTop: 65, background: '#fff' }}
				>
					<div className="section-header" style={{ marginBottom: 55 }}>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="title">Official Team Members</h3>
									<p>Official members have demonstrated proven commitment to our community by completing one or more of our membership criteria.</p>
									<AnchorLink href="#get-involved">See how you can join our team below!</AnchorLink>
								</div>
							</div>
						</div>
					</div>
					<div className="section-content">
						<div className="container">{this.renderTeamMems()}</div>
					</div>
				</section>
			);
		}
		return null;
	}
}
