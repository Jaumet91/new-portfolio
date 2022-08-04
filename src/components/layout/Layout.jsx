import PropTypes from 'prop-types';

import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
  return (
    <div className='page'>
      <header className='header'>
        <Navbar />
        <Hero />
      </header>
      <div className='main'>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};
