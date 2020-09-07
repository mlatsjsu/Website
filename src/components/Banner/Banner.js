import React from 'react';
import banner from '../../static_images/banner.jpg';

export default function Banner() {
  return (
    <section
      id="counter"
      className="front-page-section"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundColor: '#000',
      }}
    >
      <div className="counter-overlay" />
      <div className="container">
        <div className="row inline-columns">
          <div
            id="illdy_counter-4"
            className="col-sm-4 col-xs-12 widget_illdy_counter"
          >
            <span className="counter-description">HANDS-ON WORKSHOPS</span>
          </div>
          <div
            id="illdy_counter-3"
            className="col-sm-4 col-xs-12 widget_illdy_counter"
          >
            <span className="counter-description">READING GROUPS</span>
          </div>
          <div
            id="illdy_counter-2"
            className="col-sm-4 col-xs-12 widget_illdy_counter"
          >
            <span className="counter-description">
              PROJECTS &amp; PRESENTATIONS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
