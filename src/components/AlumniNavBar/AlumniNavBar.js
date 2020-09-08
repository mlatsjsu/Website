import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../static_images/logo.svg';

export default function AlumniNavBar() {
  return (
    <header id="header" className="header-front-page">
      <div
        className="top-header"
        style={{
          position: 'absolute',
          top: 0,
          background: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="container" style={{ maxWidth: '80%' }}>
          <div className="row">
            <div id="logo" className="col-sm-3 col-xs-9">
              <Link to="/">
                <img src={logo} alt="logo" height="66" />
              </Link>
            </div>
            <div id="mynav" className="col-sm-9 col-xs-3">
              <nav className="header-navigation">
                <ul
                  id="menu-illdy-main"
                  className="clearfix"
                  style={{ marginTop: 0 }}
                >
                  <li
                    id="menu-item-16"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16"
                  >
                    <AnchorLink href="#our-team">Our Alumni</AnchorLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
