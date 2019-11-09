import React, { Component } from 'react';

export default class GetInvolved extends Component {
	state = { rules: [], numberOfUsers: 0, slack: '' };
	async componentDidMount() {
		const [ ruleRes, userRes, slackRes ] = await Promise.all([
			fetch('https://sjsuml-cms.herokuapp.com/getinvolveds'),
			fetch(
				`https://slack.com/api/users.list?token=${process.env.REACT_APP_API_KEY}&include_locale=true&pretty=1`
			),
			fetch('https://sjsuml-cms.herokuapp.com/contacts')
		]);

		const [ rules, user, slack ] = await Promise.all([ ruleRes.json(), userRes.json(), slackRes.json() ]);

		const ruleSorted = rules.sort((a, b) => a.order - b.order);
		this.setState({ rules: ruleSorted, numberOfUsers: user.members.length - 8, slack: slack[0].slack });
	}

	renderRules = () => {
		const { rules } = this.state;
		return (
			<ul
				id="rules"
				style={{
					padding: 0,
					margin: '0 124px 0 124px',
					listStyle: 'none',
					textAlign: 'left',
					fontSize: 16,
					fontWeight: 700
				}}
			>
				{rules.map((rule, i) => {
					let color;
					if (i === 0) color = '#f18b6d';
					else if (i === 1) color = '#f1d204';
					else color = '#6a4d8a';
					return (
						<li key={rule.id} style={{ lineHeight: 2.5 }}>
							<div className="skill-bottom">
								<i className="fa fa-pencil" style={{ color, fontSize: 20 }} />{' '}
								<span style={{ color, fontWeight: 600, fontSize: 18 }}>{rule.content}</span>
							</div>
						</li>
					);
				})}
			</ul>
		);
	};

	render() {
		const { rules, numberOfUsers, slack } = this.state;
		if (rules.length) {
			return (
				<section
					id="get-involved"
					className="front-page-section"
					style={{
						width: '100%',
						padding: '65px 0 0',
						textAlign: 'center',
						paddingBottom: 40,
						background: '#fff'
					}}
				>
					<div className="section-header" style={{ maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 55 }}>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="title">Get Involved</h3>
									<p style={{ fontSize: 16, color: 'rgb(119, 119, 119)', marginTop: 22 }}>
										No matter if you&rsquo;re a beginner, intermediate, or advanced, you have a place 
										with us. We strongly value everyone&rsquo;s contribution in our community.
										<br />
										<br />
										First, {' '}
										<a href={slack + "/signup"} target="_blank" rel="noopener noreferrer">
											join us on Slack {' '}
										</a>
										to access our supportive community of{' '}
										<span style={{ color: '#f18b6d', fontSize: 22 }}>{numberOfUsers}</span> machine 
										learning enthusiasts! This is the best way to get notifications 
										for upcoming events.
										<br />
										<br />
										Our meetings will always be open to all SJSU affiliates. However, as an official
										member, you get extra benefits such as getting featured on our website, priority
										for RSVP events, and club funding for projects. Complete at least one item below
										per semester for official membership:
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="section-content" style={{ maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
						<div className="container">{this.renderRules()}</div>
					</div>
				</section>
			);
		}
		return null;
	}
}
