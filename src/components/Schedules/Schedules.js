import React, { Component } from 'react';
import Schedule from './Schedule/Schedule';
import pattern from '../../static_images/pattern.png';

export default class Schedules extends Component {
  state = { showmore: false };

  toggleShow = () => {
    this.setState((prevState) => {
      return {
        showmore: !prevState.showmore,
      };
    });
  };

  renderShowMoreBtn = () => {
    return (
      <div className="col-lg-12">
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <button className="showmore" onClick={this.toggleShow}>
            {!this.state.showmore ? 'Show more' : 'Show less'}
          </button>
        </div>
      </div>
    );
  };

  renderSchedules() {
    const { schedules } = this.props;
    const { showmore } = this.state;
    if (schedules.length > 6) {
      return (
        <div className="row">
          {schedules.map((schedule, i) => {
            if (!showmore) {
              if (i < 6) {
                return <Schedule key={schedule.id} schedule={schedule} />;
              }
              return null;
            }
            return <Schedule key={schedule.id} schedule={schedule} />;
          })}
          {this.renderShowMoreBtn()}
        </div>
      );
    }
    return (
      <div className="row">
        {schedules.map((schedule) => (
          <Schedule key={schedule.id} schedule={schedule} />
        ))}
      </div>
    );
  }

  render() {
    const { schedules } = this.props;
    if (!schedules.length) {
      return null;
    }

    return (
      <section
        id="schedule"
        className="front-page-section"
        style={{
          width: '100%',
          padding: '65px 0 0',
          textAlign: 'center',
          background: `url(${pattern})`,
        }}
      >
        <div className="section-header" style={{ marginBottom: 55 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="title">Schedule</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="container">{this.renderSchedules()}</div>
        </div>
      </section>
    );
  }
}
