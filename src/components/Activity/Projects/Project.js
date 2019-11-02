import React from 'react';

const Project = (props) => {
	const { project } = props;
	return (
		<div className="col-sm-3 col-lg-3" style={{ marginTop: 30 }}>
			<div className="card">
				<img src={project.picture.url} className="card-img-top" alt="..." />
				<div className="card-body" style={{ textAlign: 'left' }}>
					<h5 className="card-title">{project.title}</h5>
					<p className="card-text" style={{ fontSize: 14 }}>
						<span style={{ fontWeight: 700 }}>Members:</span> {project.members}
					</p>
					<p className="card-text" style={{ fontSize: 14 }}>
						{project.description}
					</p>
					{project.link ? (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
							style={{ border: '2px solid #f18b6d', color: '#f18b6d', fontSize: 14, fontWeight: 500 }}
						>
							View On Github
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Project;
