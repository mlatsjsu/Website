import React from 'react';
import { LazyImage } from 'react-lazy-images';
import './styles.css';

const HoverCard = (props) => {
	const { committee } = props;
	return (
		<div className="hover-card">
			<LazyImage
				src={committee.image.url}
				alt="committee-img"
				placeholder={({ imageProps, ref }) => (
					<img
						ref={ref}
						src={committee.image.url}
						alt="committee-img"
						style={{ width: '100%', height: '100%' }}
					/>
				)}
				actual={({ imageProps }) => (
					<img alt="committee-" {...imageProps} style={{ width: '100%', height: '100%' }} />
				)}
			/>
			<div className="fadedbox">
				<h4 className="centered">{committee.title}</h4>
			</div>
			<div className="hidden-fade" />

			<div className="title text" style={{ color: '#fff' }}>
				{committee.description}
			</div>
		</div>
	);
};

export default HoverCard;
