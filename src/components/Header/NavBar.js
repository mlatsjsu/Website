import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
	return (
		<div>
			<div className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-xs-8" style={{ marginTop: 20 }}>
							<a
								href="#"
								style={{
									color: '#fff',
									fontSize: 22,
									textDecoration: 'none',
									backgroundColor: 'transparent',
									fontWeight: 700,
									fontFamily: 'lato'
								}}
							>
								SJSU Machine Learning Club
							</a>
						</div>
						<div className="col-sm-8 col-xs-4">
							<nav className="header-navigation">
								<ul id="menu-illdy-main" className="clearfix">
									<li
										id="menu-item-16"
										className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16"
									>
										<AnchorLink href="#about">Mission</AnchorLink>
									</li>
									<li
										id="menu-item-17"
										className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17"
									>
										<AnchorLink href="#projects">Projects</AnchorLink>
									</li>
									<li
										id="menu-item-18"
										className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-18"
									>
										<AnchorLink href="#schedule">Schedule</AnchorLink>
									</li>
									<li
										id="menu-item-19"
										className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19"
									>
										<AnchorLink href="#team">Our Team</AnchorLink>
									</li>
									<li
										id="menu-item-20"
										className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-20"
									>
										<AnchorLink href="#contact">Contact Us</AnchorLink>
									</li>
								</ul>{' '}
							</nav>
							<button className="open-responsive-menu">
								<i className="fa fa-bars" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<nav className="responsive-menu">
				<ul>
					<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16">
						<a href="#about" aria-current="page">
							Mission
						</a>
					</li>
					<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17">
						<a href="#projects" aria-current="page">
							Project
						</a>
					</li>
					<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-18">
						<a href="#team" aria-current="page">
							Our Team
						</a>
					</li>
					<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19">
						<a href="#contact-us" aria-current="page">
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
			<div className="bottom-header front-page">
				<div className="container" style={{ height: '30vh' }} />
			</div>
		</div>
	);
};

export default NavBar;
