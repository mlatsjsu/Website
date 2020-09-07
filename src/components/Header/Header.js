import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import NavBar from './NavBar';

export default function Header(props) {
  const { carousels } = props;

  if (!carousels.length) {
    return null;
  }

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
        {carousels.map((img) => (
          <img
            key={img.id}
            src={img.image.url}
            alt="carousel-img"
            style={{ width: '100%' }}
          />
        ))}
      </Carousel>
    </header>
  );
}
