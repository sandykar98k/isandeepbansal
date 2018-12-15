import React from 'react';
import devIcon from '../../assets/devIcon.png';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-md">
      <div className="container-fluid">
        <div className="nav-brnd">
          <div className="nav-brnd-logo d-none-sm">
            <img className="img-fluid" src={devIcon} alt="dev" />
          </div>
          <div className="nav-brnd-title">
            Sandeep Bansal
            <span>Front End Dev</span>
          </div>
        </div>

        <div className="right-nav d-none d-lg-block">
          <div className="mr-auto">
            <span>Projects</span>
            <span>About Me</span>
            <span>Contact Me</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
