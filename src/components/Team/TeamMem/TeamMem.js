import React from 'react';
import defaultAvatar from '../../../static_images/default-avatar.png';

export default function TeamMem(props) {
  const { mem } = props;
  return (
    <div
      id="illdy_person"
      className="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 widget_illdy_person"
    >
      <div className="person clearfix" data-person-color="#f18b6d">
        <div className="person-image">
          <img
            alt="mem-img"
            loading="lazy"
            src={mem.picture ? mem.picture.url : defaultAvatar}
            style={{ width: '100%' }}
          />
        </div>
        <div className="person-content">
          <h5 style={{ fontWeight: 700 }}>{mem.name}</h5>
          <p
            className="person-position"
            style={{ color: 'rgb(241, 139, 109)', fontSize: 14, margin: 0 }}
          >
            {mem.title}
          </p>
          {mem.linkedin ? (
            <a
              href={mem.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0e76a8', fontSize: 20 }}
            >
              <i
                className="fa fa-linkedin"
                aria-hidden="true"
                style={{ marginRight: 12 }}
              />
            </a>
          ) : null}
          {mem.github ? (
            <a
              href={mem.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#333', fontSize: 20 }}
            >
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
