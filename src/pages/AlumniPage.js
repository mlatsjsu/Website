import React from 'react';
import { HeaderImageSlide, AlumniNavBar, Banner, Alumni } from '../components';

export default function AlumniPage(props) {
  const { carousels, alumni } = props.pageState;

  window.scrollTo(0, 0);

  return (
    <div>
      <AlumniNavBar />
      <HeaderImageSlide carousels={carousels} />
      <Banner />
      <Alumni alumni={alumni} />
    </div>
  );
}
