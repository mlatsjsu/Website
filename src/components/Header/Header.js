import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyImage } from 'react-lazy-images';
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
				<header id="header" className="header-front-page">
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
								<LazyImage
									src={img.image.url}
									alt="carousel-img"
									placeholder={({ imageProps, ref }) => (
										<img
											ref={ref}
											src={img.image.url}
											alt="carousel-img"
											style={{ width: '100%' }}
										/>
									)}
									actual={({ imageProps }) => (
										<img alt="carousel-img" {...imageProps} style={{ width: '100%' }} />
									)}
								/>
							</div>
						))}
					</Carousel>
				</header>
			);
		}
		return null;
	}
}
