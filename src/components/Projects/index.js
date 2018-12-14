import React from 'react';
import Cockpit from '../reusable/Cockpit';

const Projects = () => {
  return (
    <section className="projects-sec">
      <div className="container">
        <Cockpit
          title="My Projects"
          description="Here are some of my projects that i am currently working on"
        />
      </div>
    </section>
  );
};

export default Projects;
