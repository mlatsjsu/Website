import React from 'react';

const Project = (props) => {
	const { project, index } = props;
	return (
		<div key={project.id} className="col-sm-6 col-lg-6">
			<div className="single-feature d-flex flex-row pb-30">
				<div className="icon">
					<i
						className={index % 2 === 0 ? 'fa fa-bar-chart' : 'fa fa-tasks'}
						style={{ color: '#f18b6d', fontSize: 18, marginRight: 12 }}
					/>
				</div>
				<div className="desc">
					{project.link ? (
						<a
							href={project.link}
							className="text-uppercase"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#f18b6d', fontWeight: 600, fontSize: 22 }}
						>
							{project.name}
						</a>
					) : (
						<h4 className="text-uppercase" style={{ color: '#f18b6d', fontWeight: 600, fontSize: 22 }}>
							{project.name}
						</h4>
					)}

					<p style={{ textAlign: 'left', fontSize: 14, color: '#777' }}>{project.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Project;
