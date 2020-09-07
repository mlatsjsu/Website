import React from 'react';

export default function Footer(props) {
  const { email, slack, linkedin, youtube } = props;

  return (
    <footer id="footer">
      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="text-5" className="widget widget_text">
              <div className="widget-title">
                <h3 style={{ fontWeight: 700 }}>CONTACT US</h3>
              </div>
              <div className="textwidget">
                <p style={{ color: '#777', fontSize: 14 }}>{email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="text-5" className="widget widget_text">
              <div className="widget-title">
                <h3 style={{ fontWeight: 700 }}>JOIN US ON</h3>
              </div>
              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#777' }}
                >
                  <i
                    className="fa fa-linkedin"
                    aria-hidden="true"
                    style={{ fontSize: 28, padding: '0 5px' }}
                  />
                </a>
              ) : null}
              {slack ? (
                <a
                  href={slack}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#777' }}
                >
                  <i
                    className="fa fa-slack"
                    aria-hidden="true"
                    style={{ fontSize: 28, padding: '0 5px' }}
                  />
                </a>
              ) : null}
              {youtube ? (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#777' }}
                >
                  <i
                    className="fa fa-youtube-play"
                    aria-hidden="true"
                    style={{ fontSize: 28, padding: '0 5px' }}
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
