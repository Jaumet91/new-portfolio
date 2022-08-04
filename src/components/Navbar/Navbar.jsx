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
          <img className='navbar___pic' src={logo} />
        </Link>
        <div className='navbar__social navbar__social__main'>
          <a
            className='navbar__link'
            href='https://www.linkedin.com/in/jaimecortes91/'>
            <LinkedIn className='icon-linkedin' height={'25'} width={'25'} />
            LinkedIn
          </a>
          <a className='navbar__link' href='https://github.com/Jaumet91'>
            <Github className='icon-linkedin' height={'25'} width={'25'} />
            GitHub
          </a>
        </div>
      </div>
      <div className='navbar__wrapper'></div>
    </nav>
  );
};
