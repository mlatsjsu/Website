import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function HeaderImageSlide(props) {
  const { carousels } = props;

  if (!carousels.length) {
    return null;
  }

  return (
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
  );
}
