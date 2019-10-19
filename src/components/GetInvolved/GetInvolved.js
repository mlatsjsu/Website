import React, { Component } from 'react';

export default class GetInvolved extends Component {
	state = { rules: [] };
	async componentDidMount() {
		const ruleRes = await fetch('https://sjsuml-cms.herokuapp.com/getinvolveds');
		const rules = await ruleRes.json();
		const ruleSorted = rules.sort((a, b) => a.order - b.order);
		this.setState({ rules: ruleSorted });
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
		const { rules } = this.state;
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
						backgroundImage:
							'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
					}}
				>
					<div className="section-header" style={{ marginBottom: 55 }}>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="title">Get Involved</h3>
									<h5 style={{ fontSize: 16, color: 'rgb(119, 119, 119)', marginTop: 22 }}>
										Complete one from below per semester
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="section-content">
						<div className="container">{this.renderRules()}</div>
					</div>
				</section>
			);
		}
		return null;
	}
}
