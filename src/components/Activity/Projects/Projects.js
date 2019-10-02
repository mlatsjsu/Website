import React from 'react';
import Project from './Project';

export default class Projects extends React.Component {
	state = { showmore: false };
	renderProjects = () => {
		const { projects } = this.props;
    const { showmore } = this.state;
    if (projects.length > 4) {
			return (
				<div className="row">
					{projects.map((project, i) => {
						if (!showmore) {
							if (i < 4) {
								return <Project key={project.id} project={project} index={i} />;
							}
							return null;
						}
						return <Project key={project.id} project={project} index={i} />;
					})}
					<div className="col-lg-12">
						<div style={{ margin: 'auto', textAlign: 'center' }}>
							<button className="showmore" onClick={this.toggleShow}>
								{!showmore ? 'Show more' : 'Show less'}
							</button>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className="row">
				{projects.map((project, i) => <Project key={project.id} project={project} index={i} />)}
			</div>
		);
	};

	toggleShow = () => {
		this.setState((prevState) => {
			return {
				showmore: !prevState.showmore
			};
		});
	};
	render() {
		return (
			<div className="container">
				{this.renderProjects()}
			</div>
		);
	}
}
