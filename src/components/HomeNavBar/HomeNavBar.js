import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../static_images/logo.svg';

export default function NavBar() {
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
                    <AnchorLink href="#about">Mission</AnchorLink>
                  </li>
                  <li
                    id="menu-item-17"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17"
                  >
                    <AnchorLink href="#schedule">Schedule</AnchorLink>
                  </li>
                  <li
                    id="menu-item-18"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-18"
                  >
                    <AnchorLink href="#committees">Committees</AnchorLink>
                  </li>
                  <li
                    id="menu-item-19"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19"
                  >
                    <AnchorLink href="#our-team">Our Team</AnchorLink>
                  </li>
                  <li
                    id="menu-item-20"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-20"
                  >
                    <AnchorLink href="#projects">Projects</AnchorLink>
                  </li>
                  <li
                    id="menu-item-21"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-21"
                  >
                    <AnchorLink href="#get-involved">Get Involved</AnchorLink>
                  </li>
                  <li
                    id="menu-item-22"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-22"
                  >
                    <AnchorLink href="#contact">Contact Us</AnchorLink>
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
