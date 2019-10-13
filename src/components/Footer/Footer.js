import React, { Component } from 'react';

export default class Footer extends Component {
	state = { contact: null };
	async componentDidMount() {
		const contactRes = await fetch('https://sjsuml-cms.herokuapp.com/contacts');
		const contact = await contactRes.json();
		this.setState({ contact: contact[0] });
	}
	render() {
		const { contact } = this.state;
		if (contact) {
			return (
				<footer id="footer">
					<div className="container" id="contact">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div id="text-5" className="widget widget_text">
									<div className="widget-title">
										<h3 style={{ fontWeight: 700 }}>CONTACT US</h3>
									</div>
									<div className="textwidget">
										<p style={{ color: '#777', fontSize: 14 }}>{contact.email}</p>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div id="text-5" className="widget widget_text">
									<div className="widget-title">
										<h3 style={{ fontWeight: 700 }}>JOIN US ON</h3>
									</div>
									{contact.linkedin ? (
										<a
											href={contact.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: '#777' }}
										>
											<i
												className="fa fa-linkedin"
												aria-hidden="true"
												style={{ fontSize: 28, padding: '0 5px' }}
											/>
										</a>
									) : null}
									{contact.slack ? (
										<a
											href={contact.slack}
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: '#777' }}
										>
											<i
												className="fa fa-slack"
												aria-hidden="true"
												style={{ fontSize: 28, padding: '0 5px' }}
											/>
										</a>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</footer>
			);
		}
		return null;
	}
}
