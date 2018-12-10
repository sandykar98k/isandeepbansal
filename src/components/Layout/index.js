import React from 'react';

import Header from '../Header';
import Intro from '../Intro';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid p-0">
        <Intro />
      </div>
    </React.Fragment>
  );
};

export default Layout;
