import { useState } from 'react';
import { Link } from 'react-router-dom';

import { logo, logoWhite, bgHeader } from '../../assets/images';
import { LinkedIn, Github } from '../icons';
import { data } from '../../../data';

const { navLinks } = data;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar' id='navbar'>
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
          className='navbar__burger'
          onClick={() => setIsOpen(toggle => !toggle)}></button>
      </div>
      {!isOpen && (
        <div className='navbar__wrapper'>
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
              <a
                className='navbar__line'
                href='mailto:hello@jaimecortesdev.com'>
                <div className='navbar__icon'>
                  <Github className='icon' height={'20'} width={'20'} />
                </div>
                <div className='navbar__text'>hello@jaimecortesdev.com</div>
              </a>
              <div className='navbar__line'>
                <div className='navbar__icon'>
                  <Github className='icon' height={'20'} width={'20'} />
                </div>
                <div className='navbar__text'>
                  <p>Murcia, España</p>
                </div>
              </div>
              <a className='navbar__line' href='tel:+34609431585'>
                <div className='navbar__icon'>
                  <Github className='icon' height={'20'} width={'20'} />
                </div>
                <div className='navbar__text'>+34 609 431 585</div>
              </a>
            </div>
            <ul className='navbar__nav'>
              {navLinks.map(({ name, url }) => (
                <li key={name + url} className='navbar__item' id={url}>
                  {name}
                </li>
              ))}
            </ul>
            <div className='navbar__social navbar__social_inner'></div>
          </div>
        </div>
      )}
    </nav>
  );
};