import React from 'react';
import image from '../static_images/img-404.png';

export default function NotFound() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 200,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={image} alt="404" style={{ width: '30%' }} />
    </div>
  );
}
