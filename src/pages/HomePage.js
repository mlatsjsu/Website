import React from 'react';
import {
  HomeNavBar,
  HeaderImageSlide,
  Mission,
  Schedules,
  Projects,
  Banner,
  //Committees,
  Team,
  GetInvolved,
} from '../components';

export default function HomePage(props) {
  const {
    carousels,
    missions,
    //committees,
    teammems,
    projects,
    rules,
    numberOfUsers,
    slack,
  } = props.pageState;

  return (
    <div>
      <HomeNavBar />
        <HeaderImageSlide carousels={carousels} />
        <Mission missions={missions} />
      <Schedules />
      <Banner />
        {/*<Committees committees={committees} /> */}
        <Projects projects={projects} />
      <Team teammems={teammems} />

      <GetInvolved rules={rules} numberOfUsers={numberOfUsers} slack={slack} />
    </div>
  );
}
