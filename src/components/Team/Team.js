import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TeamMem from './TeamMem/TeamMem';

export default class Team extends Component {
	state = { teammems: [] };

	async componentDidMount() {
		const teammemRes = await fetch('https://sjsuml-cms.herokuapp.com/teammems');
		const teammems = await teammemRes.json();
		const teammemSorted = teammems.sort((a, b) => a.order - b.order);

		const teammemsWithNoCommittee = teammemSorted.filter((mem) => !mem.committees.length && !mem.leadCommittee);

		this.setState({ teammems: teammemsWithNoCommittee });
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
					style={{
						paddingBottom: 40,
						paddingTop: 65,
						background:
							this.props.order % 2 === 0
								? 'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
								: '#fff'
					}}
				>
					<div id="our-team" className="section-header" style={{ marginBottom: 55 }}>
						<div className="container">
							<div className="row">
								<div
									className="col-sm-12"
									style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
								>
									<h3 className="title">Official Team Members</h3>
									<p style={{ fontSize: 16, color: 'rgb(119, 119, 119)', marginTop: 18 }}>
										Official members have demonstrated proven commitment to our community by
										completing one or more of our membership criteria.
									</p>
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
