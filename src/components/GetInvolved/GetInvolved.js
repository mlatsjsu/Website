import React from 'react';
import pattern from '../../static_images/pattern.png';

export default function GetInvolved(props) {
  const { rules, numberOfUsers } = props;

  const renderRules = () => {
    return (
      <ul
        id="rules"
        style={{
          padding: 0,
          margin: '0 124px 0 124px',
          listStyle: 'none',
          textAlign: 'left',
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        {rules.map((rule, i) => {
          let color;
          if (i === 0) color = '#f18b6d';
          else if (i === 1) color = '#f1d204';
          else color = '#6a4d8a';
          return (
            <li key={rule.id} style={{ lineHeight: 2.5 }}>
              <div className="skill-bottom">
                <i className="fa fa-pencil" style={{ color, fontSize: 20 }} />{' '}
                <span style={{ color, fontWeight: 600, fontSize: 18 }}>
                  {rule.content}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  if (!rules.length) {
    return null;
  }

  return (
    <section
      id="get-involved"
      className="front-page-section"
      style={{
        width: '100%',
        padding: '65px 0 0',
        textAlign: 'center',
        paddingBottom: 40,
        background: `url(${pattern})`,
      }}
    >
      <div
        className="section-header"
        style={{
          maxWidth: '850px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 55,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="title">Get Involved</h3>
              <p
                style={{
                  fontSize: 16,
                  color: 'rgb(119, 119, 119)',
                  marginTop: 22,
                }}
              >
                No matter if you&rsquo;re a beginner, intermediate, or advanced,
                you have a place with us. We strongly value everyone&rsquo;s
                contribution in our community.
                <br />
                <br />
                First,{' '}
                <a
                  href='https://discord.gg/kVparFSSV4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  join us on Discord{' '}
                </a>
                to access our supportive community of{' '}
                <span style={{ color: '#f18b6d', fontSize: 22 }}>
                  {numberOfUsers} {/* TODO Make sure num users is pulled correctly from backend */}
                </span>{' '}
                machine learning enthusiasts! This is the best way to get
                notifications for upcoming events.
                <br />
                <br />
                Our meetings will always be open to all SJSU affiliates.
                However, as an official member, you get extra benefits such as
                getting featured on our website, priority for RSVP events, and
                club funding for projects. Complete at least one item below per
                semester for official membership:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-content"
        style={{ maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <div className="container">{renderRules()}</div>
      </div>
    </section>
  );
}
