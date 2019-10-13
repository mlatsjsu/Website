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
							<div>
								<img src={img.image.url} alt={`carousel${i}`} />
							</div>
						))}
					</Carousel>
				</header>
			);
		}
		return null;
	}
}
