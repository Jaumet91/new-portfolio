import { useState } from 'react';
import { Link } from 'react-router-dom';

import { logo, logoWhite, bgHeader } from '../../assets/images';
import { LinkedIn, Github, Phone, Place, Email } from '../icons';
import { data } from '../../../data';

const { navLinks } = data;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__center center'>
        <Link to='/' className='navbar__logo'>
          <img className='navbar__pic' src={logo} />
        </Link>
        <div className='navbar__social navbar__social_nav'>
          <a
            className='navbar__link'
            href='https://www.linkedin.com/in/jaimecortes91/'
            target='_blank'
            rel='noreferrer'>
            <LinkedIn className='icon' height={'17'} width={'17'} />
            LinkedIn
          </a>
          <a
            className='navbar__link'
            href='https://github.com/Jaumet91'
            target='_blank'
            rel='noreferrer'>
            <Github className='icon' height={'20'} width={'20'} />
            GitHub
          </a>
        </div>
        <button
          className={`navbar__burger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(toggle => !toggle)}></button>
      </div>

      <div className={`navbar__wrapper ${isOpen ? 'visible' : ''}`}>
        <div className='navbar__preview'>
          <Link to='/' className='navbar__logo'>
            <img className='navbar__pic' src={logoWhite} />
          </Link>
          <div className='navbar__img'>
            <img className='navbar__pic' src={bgHeader} />
          </div>
        </div>
        <div className='navbar__center center'>
          <div className='navbar__contacts'>
            <a className='navbar__line' href='mailto:hello@jaimecortesdev.com'>
              <div className='navbar__icon'>
                <Email className='icon' height={'20'} width={'20'} />
              </div>
              <div className='navbar__text'>hello@jaimecortesdev.com</div>
            </a>
            <div className='navbar__line'>
              <div className='navbar__icon'>
                <Place className='icon' height={'20'} width={'20'} />
              </div>
              <div className='navbar__text'>
                <p>Murcia, España</p>
              </div>
            </div>
            <a className='navbar__line' href='tel:+34609431585'>
              <div className='navbar__icon'>
                <Phone className='icon' height={'20'} width={'20'} />
              </div>
              <div className='navbar__text'>+34 609 431 585</div>
            </a>
          </div>
          <nav className='navbar__nav'>
            {navLinks.map(({ name, url }) => (
              <a key={name + url} className='navbar__item' href={url}>
                <span>{name}</span>
              </a>
            ))}
          </nav>
          <div className='navbar__social navbar__social_inner'>
            <a
              className='navbar__link'
              href='https://www.linkedin.com/in/jaimecortes91/'
              target='_blank'
              rel='noreferrer'>
              <LinkedIn className='icon' height={'17'} width={'17'} />
              LinkedIn
            </a>
            <a
              className='navbar__link'
              href='https://github.com/Jaumet91'
              target='_blank'
              rel='noreferrer'>
              <Github className='icon' height={'20'} width={'20'} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
