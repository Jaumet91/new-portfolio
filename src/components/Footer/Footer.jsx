import { Link } from 'react-scroll';

import { logoEmpty, footerCube1, footerCube2 } from '../../assets/images';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__center center'>
        <div className='footer__body'>
          <Link
            className='footer__logo'
            to='header'
            smooth={true}
            offset={0}
            duration={1000}>
            <img className='footer__pic' src={logoEmpty} alt='logoEmpty' />
          </Link>
          <div className='footer__wrap'>
            <h1 className='footer__title h1'>
              You only have one chance to make a first impression.
            </h1>
            <h2 className='footer__info h4'>make it an amazing one.</h2>
          </div>
          <div className='footer__menu'>
            <Link
              className='footer__link'
              to='details'
              smooth={true}
              offset={50}
              duration={1000}>
              Sobre mí
            </Link>
            <Link
              className='footer__link'
              to='work'
              smooth={true}
              offset={50}
              duration={1000}>
              Trabajo
            </Link>
            <Link
              className='footer__link'
              to='portfolio'
              smooth={true}
              offset={50}
              duration={1000}>
              Portfolio
            </Link>
            <a
              className='footer__link'
              href='https://www.linkedin.com/in/jaimecortes91/'
              target='_blank'
              rel='noreferrer'>
              LinkedIn
            </a>
            <a
              className='footer__link'
              href='https://github.com/Jaumet91'
              target='_blank'
              rel='noreferrer'>
              GitHub
            </a>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='footer__copyright'>© 2022, Jaime Cortes</div>
          <Link
            className='footer__scroll'
            to='header'
            smooth={true}
            offset={0}
            duration={1000}>
            Volver al inicio
          </Link>
        </div>
      </div>
      <div className='footer__bg'>
        <div className='footer__preview'>
          <img className='footer__pic' src={footerCube1} alt='footercube1' />
        </div>
        <div className='footer__preview'>
          <img className='footer__pic' src={footerCube2} alt='footercube2' />
        </div>
      </div>
    </footer>
  );
};
