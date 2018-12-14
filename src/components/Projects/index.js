import React from 'react';
import Cockpit from '../reusable/Cockpit';
import ProjectCard from '../reusable/ProjectCard';
import htmlImg from '../../assets/html.svg';
import reactImg from '../../assets/reactjs.png';
import javaScriptImg from '../../assets/javascript.svg';

const Projects = () => {
  return (
    <section className="Projects-Sec">
      <div className="container">
        <Cockpit
          title="Explore My Projects"
          description="Here are some of my projects that i am currently working on"
        />
        <div className="row Projects-Sec-Body">
          <div className="Scrolling-Cards">
            <ProjectCard imgUrl={htmlImg} cardName="HTML/CSS Projects" />
            <ProjectCard imgUrl={reactImg} cardName="React Projects" />
            <ProjectCard
              imgUrl={javaScriptImg}
              cardName="JavaScript Projects"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
