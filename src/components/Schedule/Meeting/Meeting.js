import React from 'react';
import styles from './styles.module.css';

const toDateString = (date) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
	const datestring = date.toLocaleDateString('en-US', options);
	return datestring;
};

const Meeting = (props) => {
	const { meeting } = props;
	return (
		<div className="col-lg-6 col-md-6 col-sm-6">
			<div className="single-feature d-flex flex-row pb-30">
				<div className={styles.icon}>
					{/* lnr-cloud-upload */}
					<i className={meeting.date.getTime() < Date.now() ? 'fa fa-cloud-upload' : 'fa fa-rocket'} />
				</div>
				<div>
					<h4 className={styles.topic}>
						{toDateString(meeting.date)}
						{': '}
						{meeting.link ? (
							<a
								href={meeting.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: 'rgb(241, 139, 109)' }}
							>
								{meeting.topic}
							</a>
						) : (
							<span style={{ color: 'rgb(241, 139, 109)' }}>{meeting.topic}</span>
						)}
					</h4>
					<p style={{ textAlign: 'left', fontSize: 14, color: '#777' }}>
						{meeting.description} <span style={{ color: 'rgb(241, 139, 109)' }}>{meeting.location}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Meeting;
