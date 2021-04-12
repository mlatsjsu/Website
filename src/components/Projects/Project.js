import React from 'react';

export default function Project(props) {
  const { project } = props;
  return (
    <div className="col-sm-3 col-lg-3" style={{ marginTop: 30 }}>
      <div className="card">
        <img
          src={project.picture.url}
          alt="project-img"
          loading="lazy"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="card-body" style={{ textAlign: 'left' }}>
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text" style={{ fontSize: 14 }}>
            <span style={{ fontWeight: 700 }}>Members:</span> {project.members}
          </p>
          <p className="card-text" style={{ fontSize: 14 }}>
            {project.description}
          </p> {/*TODO: Cut off text after certain word limit (Show more instead) */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                border: '2px solid #f18b6d',
                color: '#f18b6d',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Link
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
