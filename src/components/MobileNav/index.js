import React from 'react';
import homeIcon from '../../assets/home.svg';
import projectIcon from '../../assets/projects.svg';
import aboutIcon from '../../assets/about.svg';
import moreIcon from '../../assets/more.svg';

class MobileNav extends React.Component {
  render() {
    return (
      <div className="d-block d-lg-none shadow Mobile-Nav">
        <div className="Mobile-Nav-Items">
          <div className="Mobile-Nav-Item">
            <img src={homeIcon} className="img-fluid" alt="home" />
            <span className="Mobile-Nav-Item-Active">Home</span>
          </div>
          <div className="Mobile-Nav-Item">
            <img src={projectIcon} className="img-fluid" alt="projects" />
            <span>My Work</span>
          </div>
          <div className="Mobile-Nav-Item">
            <img src={aboutIcon} className="img-fluid" alt="about" />
            <span>About Me</span>
          </div>
          <div className="Mobile-Nav-Item">
            <img src={moreIcon} className="img-fluid" alt="menu" />
            <span>Menu</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNav;
