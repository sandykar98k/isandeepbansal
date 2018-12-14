import React from 'react';
import Intro from '../../Intro';
import MySkills from '../../MySkills';
import Projects from '../../Projects';
const HomePage = () => {
  return (
    <React.Fragment>
      <Intro />
      <Projects />
      <MySkills />
    </React.Fragment>
  );
};

export default HomePage;
