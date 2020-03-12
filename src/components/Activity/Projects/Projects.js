import React from 'react';
import Project from './Project';

export default class Projects extends React.Component {
	state = { projects: [] };

	async componentDidMount() {
		const projectRes = await fetch('https://sjsuml-cms.herokuapp.com/projects');
		const projects = await projectRes.json();

		const projectSorted = projects.sort((a, b) => a.order - b.order);
		this.setState({ projects: projectSorted });
	}

	renderProjects = () => {
		const { projects } = this.state;

		return <div className="row inline-columns">{projects.map((pj) => <Project key={pj.id} project={pj} />)}</div>;
	};

	render() {
		return (
			<section
				id="projects"
				className="front-page-section"
				style={{
					paddingBottom: 40,
					paddingTop: 65,
					background:
						this.props.order % 2 === 0
							? 'url(https://colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)'
							: '#fff'
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
					<div className="container">{this.renderProjects()}</div>
				</div>
			</section>
		);
	}
}
