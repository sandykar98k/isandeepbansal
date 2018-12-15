import React from 'react';

import Header from '../Header';
import HomePage from '../Pages/HomePage';
import MobileNav from '../MobileNav';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div id="container">
      <Header />
      <div id="body" className="container-fluid pr-0 pl-0">
        <HomePage />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
