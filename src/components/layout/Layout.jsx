import PropTypes from 'prop-types';

import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';
import { Contacts } from '../Contacts';
import { Portfolio } from '../Portfolio';

export const Layout = ({ children }) => {
  return (
    <div className='page'>
      <header className='header' id='header'>
        <Navbar />
        <Hero />
      </header>
      <main>{children}</main>
      <div className='wrapper wrapper_gradient'>
        <Portfolio />
        <div className='wrapper wrapper_dark'>
          <Contacts />
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
