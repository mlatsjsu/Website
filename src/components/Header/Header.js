import React, { Component } from 'react';
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
					style={{
						backgroundImage: `url(${images[0].image.url})`,
						backgroundAttachment: 'fixed'
					}}
				>
					<NavBar />
				</header>
			);
		}
		return null;
	}
}
