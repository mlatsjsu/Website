import React, { Component } from 'react';
import pattern from '../../static_images/pattern.png';

export default class Schedules extends Component {
  // state = { showmore: false };

  // toggleShow = () => {
  //   this.setState((prevState) => {
  //     return {
  //       showmore: !prevState.showmore,
  //     };
  //   });
  // };

  // renderShowMoreBtn = () => {
  //   return (
  //     <div className="col-lg-12">
  //       <div style={{ margin: 'auto', textAlign: 'center' }}>
  //         <button className="showmore" onClick={this.toggleShow}>
  //           {!this.state.showmore ? 'Show more' : 'Show less'}
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  // renderSchedules() {
  //   const { schedules } = this.props;
  //   const { showmore } = this.state;
  //   if (schedules.length > 6) {
  //     return (
  //       <div className="row">
  //         {schedules.map((schedule, i) => {
  //           if (!showmore) {
  //             if (i < 6) {
  //               return <Schedule key={schedule.id} schedule={schedule} />;
  //             }
  //             return null;
  //           }
  //           return <Schedule key={schedule.id} schedule={schedule} />;
  //         })}
  //         {this.renderShowMoreBtn()}
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="row">
  //       {schedules.map((schedule) => (
  //         <Schedule key={schedule.id} schedule={schedule} />
  //       ))}
  //     </div>
  //   );
  // }

  render() {
    // const { schedules } = this.props;
    // if (!schedules.length) {
    //   return null;
    // }

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
          <div className="container" style={{ height: 548, paddingBottom: 62 }}>
            <iframe
              title="SJSU Event Calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23f1d204&amp;ctz=America%2FLos_Angeles&amp;src=c2pzdW1sY2x1YkBnbWFpbC5jb20&amp;color=%23EF6C00&amp;showTabs=1&amp;showNav=1&amp;title=ML%40SJSU%20Calendar&amp;showPrint=0&amp;showDate=1&amp;showCalendars=0&amp;showTz=1"
              style={{
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}
