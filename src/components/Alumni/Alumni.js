import React from 'react';
import Member from '../Member/Member';
import pattern from '../../static_images/pattern.png';

export default function Alumni(props) {
  const { alumni } = props;

  const renderAlumniMems = () => {
    return (
      <div className="row inline-columns">
        {alumni.map((mem) => (
          <Member key={mem.id} mem={mem} />
        ))}
      </div>
    );
  };

  if (!alumni.length) {
    return null;
  }

  return (
    <section
      id="team"
      className="front-page-section"
      style={{
        paddingBottom: 40,
        paddingTop: 65,
        background: `url(${pattern})`
      }}
    >
      <div
        id="our-team"
        className="section-header"
        style={{ marginBottom: 55 }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12"
              style={{
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <h3 className="title">Our Alumni</h3>
              {/* <p
                style={{
                  fontSize: 16,
                  color: 'rgb(119, 119, 119)',
                  marginTop: 18,
                }}
              >
                Official members have demonstrated proven commitment to our
                community by completing one or more of our membership criteria.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">{renderAlumniMems()}</div>
      </div>
    </section>
  );
}
