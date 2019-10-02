import React from 'react';

const TeamMem = (props) => {
	const { mem } = props;
	return (
		<div id="illdy_person" className="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 widget_illdy_person">
			<div className="person clearfix" data-person-color="#f18b6d">
				<div className="person-image">
					<img
						src={
							mem.picture ? (
								mem.picture.url
							) : (
								'https://res.cloudinary.com/tintheanh/image/upload/v1569539394/dyweilfehllqbhq5ejsg.png'
							)
						}
						alt={mem.name}
						title={mem.name}
					/>
				</div>
				<div className="person-content">
					<h2 style={{ fontWeight: 700 }}>{mem.name}</h2>
					<p className="person-position" style={{ color: 'rgb(241, 139, 109)', fontSize: 14 }}>
						{mem.title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMem;
