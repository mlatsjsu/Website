import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import NavBar from './NavBar';

export default class Header extends Component {
	state = { images: [] };

	async componentDidMount() {
		const imageRes = await fetch('https://sjsuml-cms.herokuapp.com/carousels');
		const images = await imageRes.json();
		this.setState({ images });
	}
	render() {
		const { images } = this.state;
		if (images.length) {
			return (
				<header
					id="header"
					className="header-front-page"
					// style={{
					// 	backgroundImage: `url(${images[0].image.url})`,
					// 	backgroundAttachment: 'fixed'
					// }}
				>
					<NavBar />
					<Carousel
						showThumbs={false}
						showStatus={false}
						showIndicators={false}
						autoPlay
						interval={2500}
						infiniteLoop
					>
						{images.map((img, i) => (
							<div key={img.id}>
								<img src={img.image.url} alt={`carousel${i}`} />
							</div>
						))}
					</Carousel>
					<div style={{ position: 'absolute', height:'60px', color:'white',opacity:0.9, backgroundColor: '#000000'}}>
						<p>We are ML@SJSU, a Recognized Student Organization at San Jose State University! Our community provides an interactive, hands-on environment to support growth in artificial intelligence and machine learning. Come join us on Fridays from 4-6pm in MacQuarrie Hall 226. All are welcome!</p>
					</div>
				</header>
			);
		}
		return null;
	}
}
