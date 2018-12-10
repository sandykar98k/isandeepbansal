import React from 'react';
import devIcon from '../../assets/devIcon.png';

const Header = () => {
  return (
    <nav className="navbar navbar-light shadow-sm">
      <div className="container">
        <div className="nav-brnd">
          <div className="nav-brnd-logo">
            <img src={devIcon} alt="dev" />
          </div>
          <div className="nav-brnd-title">
            Sandeep Bansal
            <span>Front End Dev</span>
          </div>
        </div>

        <div className="right-nav">
          <div className="mr-auto">
            <span>Projects</span>
            <span>Services</span>
            <span>About Me</span>
            <span>Contact Me</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
