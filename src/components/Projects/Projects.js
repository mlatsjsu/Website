import React from 'react';
import Project from './Project';

export default function Projects(props) {
  const { projects } = props;

  const renderProjects = () => {
    return (
      <div className="row inline-columns">
        {projects.map((pj) => (
          <Project key={pj.id} project={pj} />
        ))}
      </div>
    );
  };

  if (!projects.length) {
    return null;
  }

  return (
    <section
      id="projects"
      className="front-page-section"
      style={{
        paddingBottom: 40,
        paddingTop: 65,
      }}
    >
      <div className="section-header" style={{ marginBottom: 55 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="title">Projects</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">{renderProjects()}</div>
      </div>
    </section>
  );
}
