import { Link } from 'react-router-dom';

import { logo } from '../../assets/images';
import { LinkedIn, Github } from '../icons';

export const Navbar = () => {
  const onHandleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className='navbar' id='navbar'>
      <div className='navbar__center center'>
        <Link to='/' className='navbar__logo' onClick={onHandleClick}>
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
        <button className='navbar__burger'></button>
      </div>
      <div className='navbar__wrapper'></div>
    </nav>
  );
};
