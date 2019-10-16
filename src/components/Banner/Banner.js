import React from 'react';

const Banner = () => (
	<section
		id="counter"
		className="front-page-section"
		style={{
			backgroundImage: `url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/front-page-counter.jpg)`,
			backgroundColor: '#000000'
		}}
	>
		<div className="counter-overlay" />
		<div className="container">
			<div className="row inline-columns">
				<div id="illdy_counter-4" className="col-sm-4 col-xs-12 widget_illdy_counter">
					{/* <span
        className="counter-number"
        data-from="1"
        data-to={projects.length}
        data-speed="1000"
        data-refresh-interval="100"
      /> */}
					<span className="counter-description">WORKSHOPS</span>
				</div>
				<div id="illdy_counter-3" className="col-sm-4 col-xs-12 widget_illdy_counter">
					{/* <span
        className="counter-number"
        data-from="1"
        data-to={meetings.length}
        data-speed="1000"
        data-refresh-interval="100"
      /> */}
					<span className="counter-description">READING GROUPS</span>
				</div>
				<div id="illdy_counter-2" className="col-sm-4 col-xs-12 widget_illdy_counter">
					{/* <span
        className="counter-number"
        data-from="1"
        data-to="159"
        data-speed="2000"
        data-refresh-interval="100"
      /> */}
					<span className="counter-description">PROJECTS</span>
				</div>
			</div>
		</div>
	</section>
);

export default Banner;
