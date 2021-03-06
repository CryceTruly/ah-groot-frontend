
import React, { Component } from 'react';
import NavBarContainer from '../../containers/LandingPage/NavBarContainer';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-top-wrapper">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li>
              <a href="#">Home</a>
            </li>
            <NavBarContainer />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;