import React from 'react';
import './styles.css';

const HoverCard = (props) => {
  const { committee } = props;
  return (
    <div className="hover-card">
      <img
        src={committee.image.url}
        alt="committee-img"
        loading="lazy"
        style={{ width: '100%', height: '100%' }}
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
