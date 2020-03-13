import React from 'react';
import Committee from './Committee/Committee';

class Committees extends React.Component {
	state = { committees: [] };

	async componentDidMount() {
		const committeeRes = await fetch('https://sjsuml-cms.herokuapp.com/committees');
		const committees = await committeeRes.json();

		committees.map((committee) => {
			if (committee.leaders.length) {
				const seen = new Set();
				const all = [ ...committee.leaders, ...committee.teammems ];

				committee.teammems = all.filter((el) => {
					const duplicate = seen.has(el.id);
					seen.add(el.id);
					return !duplicate;
				});
			}
			return committee;
		});

		this.setState({ committees });
	}

	renderCommittees = () => {
		return this.state.committees.map((committee) => (
			<Committee
				key={committee.id}
				background={
					this.props.order % 2 === 0 ? (
						'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
					) : (
						'#fff'
					)
				}
				committee={committee}
			/>
		));
	};

	render() {
		if (this.state.committees.length) {
			return (
				<section
					id="committees"
					className="front-page-section"
					style={{
						width: '100%',
						padding: '65px 0 0',
						textAlign: 'center',
						paddingBottom: 40,
						background:
							this.props.order % 2 === 0
								? 'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
								: 'fff'
					}}
				>
					<div
						className="section-header"
						style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 55 }}
					>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="title">Committees</h3>
									<p style={{ fontSize: 16, color: 'rgb(119, 119, 119)', marginTop: 18 }}>
										Our meetings alternate between Committee Days and Club Days. Committee Days let
										members become experts in their topic of interest, while Club Days promote
										symbiotic learning as a community.
									</p>
									<ul
										id="rules"
										style={{
											padding: 0,
											listStyle: 'none',
											textAlign: 'center'
										}}
									>
										<li style={{ marginBottom: 10 }}>
											<div className="skill-bottom">
												<i className="fa fa-pencil" style={{ color: '#f18b6d' }} />{' '}
												<span style={{ color: '#f18b6d' }}>
													<span style={{ fontWeight: 600 }}>Committee Days:</span> Members
													work within their committee to learn, share resources, and complete
													projects as a team.
												</span>
											</div>
										</li>
										<li>
											<div className="skill-bottom">
												<i className="fa fa-pencil" style={{ color: '#6a4d8a' }} />{' '}
												<span style={{ color: '#6a4d8a' }}>
													<span style={{ fontWeight: 600 }}>Club Days:</span> Committees
													rotate to host workshops, paper readings, presentations, or fun
													games (e.g. trivia) for symbiotic club learning. Learners are
													exposed to important concepts from other AI areas, and presenters
													refine their knowledge by teaching others.
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="section-content">
						<div className="container">{this.renderCommittees()}</div>
					</div>
				</section>
			);
		}
		return null;
	}
}

export default Committees;
