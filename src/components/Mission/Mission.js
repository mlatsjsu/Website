import React from 'react';

export default function Mission(props) {
  const { missions } = props;

  if (!missions.length) {
    return null;
  }

  return (
    <section id="about" className="front-page-section">
      <div className="section-header" style={{ marginBottom: 0, marginTop: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="title">Mission</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">
          <div className="row">
            <div
              id="illdy_skill-2"
              className="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-3 col-lg-offset-0 widget_illdy_skill"
            >
              <div className="skill">
                <div className="skill-bottom">
                  <i
                    className="fa fa-font"
                    style={{ color: '#f18b6d', fontSize: 18 }}
                  />
                  <span
                    style={{
                      color: '#f18b6d',
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {missions[0].content}
                  </span>
                </div>
              </div>
            </div>
            <div
              id="illdy_skill-3"
              className="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-3 col-lg-offset-0 widget_illdy_skill"
            >
              <div className="skill">
                <div className="skill-bottom">
                  <i
                    className="fa fa-pencil"
                    style={{ color: '#f1d204', fontSize: 18 }}
                  />
                  <span
                    style={{
                      color: '#f1d204',
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {missions[1].content}
                  </span>
                </div>
              </div>
            </div>
            <div
              id="illdy_skill-4"
              className="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-3 col-lg-offset-0 widget_illdy_skill"
            >
              <div className="skill">
                <div className="skill-bottom">
                  <i
                    className="fa fa-code"
                    style={{ color: '#6a4d8a', fontSize: 18 }}
                  />
                  <span
                    style={{
                      color: '#6a4d8a',
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {missions[2].content}
                  </span>
                </div>
              </div>
            </div>
            <div
              id="illdy_skill-5"
              className="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 col-lg-3 col-lg-offset-0 widget_illdy_skill"
              style={{ marginTop: 0 }}
            >
              <div className="skill">
                <div className="skill-bottom">
                  <i
                    className="fa fa-codepen"
                    style={{ color: '#116611', fontSize: 18 }}
                  />
                  <span
                    style={{
                      color: '#116611',
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {missions[3].content}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
