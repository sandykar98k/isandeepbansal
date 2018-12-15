import React from 'react';

import Header from '../Header';
import HomePage from '../Pages/HomePage';
import MobHeader from '../MobHeader';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid p-0">
        <HomePage />
      </div>
      <MobHeader />
    </React.Fragment>
  );
};

export default Layout;
