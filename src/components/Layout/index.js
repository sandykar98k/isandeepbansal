import React from 'react';

import Header from '../Header';
import HomePage from '../Pages/HomePage';
import MobileNav from '../MobileNav';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid p-0">
        <HomePage />
      </div>
      <MobileNav />
    </React.Fragment>
  );
};

export default Layout;
