import React from 'react';
import { LazyImage } from 'react-lazy-images';
import TeamMem from '../../Team/TeamMem/TeamMem';

const renderTeamMems = (teammems) => {
	return <div className="row inline-columns">{teammems.map((mem) => <TeamMem key={mem.id} mem={mem} />)}</div>;
};

const Committee = (props) => {
	const { committee, background } = props;
	return (
		<section
			id="team"
			className="front-page-section"
			style={{ paddingBottom: 30, paddingTop: 0, background: background }}
		>
			<div className="line-break" style={{ borderBottom: '1px solid #eee' }}>
				<i className="fa fa-laptop" style={{ position: 'relative', top: 12, fontSize: 38, color: '#eee' }} />
			</div>
			<div className="row" style={{ marginTop: 66 }}>
				<div className="col-sm-6" style={{ maxHeight: 340 }}>
					<LazyImage
						src={committee.image.url}
						alt="committee-"
						placeholder={({ imageProps, ref }) => (
							<img ref={ref} src={committee.image.url} alt="committee-" style={{ width: '100%', height: '100%' }} />
						)}
						actual={({ imageProps }) => <img alt="committee-" {...imageProps} style={{ width: '100%', height: '100%' }} />}
					/>
				</div>
				<div className="col-sm-6">
					<h4 className="title" style={{ textAlign: 'left' }}>
						{committee.title}
					</h4>
					<p style={{ textAlign: 'left' }}>{committee.description}</p>
				</div>
			</div>
			{committee.teammems.length ? (
				<div className="section-content">
					<h4 className="title" style={{ paddingTop: 28, paddingBottom: 28 }}>
						Members
					</h4>
					<div className="container">{renderTeamMems(committee.teammems)}</div>
				</div>
			) : null}
		</section>
	);
};

export default Committee;
