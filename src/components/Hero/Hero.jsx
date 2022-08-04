import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import {
  bgMain,
  scroll,
  headerPic1,
  headerPic2,
  headerPic3,
  headerPic4,
  headerPic5,
  headerPic6,
  headerPic7,
  figure1,
  figure2,
  figure3
} from '../../assets/images';

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='header__bg'>
        <img className='header__pic' src={bgMain} />
      </div>
      <div className='center'>
        <div className='header__wrap'>
          <div className='stage' data-aos='transform'>
            Jaime Cortes
          </div>
          <h1 className='header__title title h1'>
            <span data-aos='transform' data-aos-delay='150'>
              Hola!, me
            </span>
            <span data-aos='transform' data-aos-delay='300'>
              llamo Jaime.
            </span>
            <span data-aos='transform' data-aos-delay='450'>
              Soy Full-Stack
            </span>
            <span data-aos='transform' data-aos-delay='600'>
              Developer.
            </span>
          </h1>
          <Link
            className='scroll'
            to='details'
            data-aos='transform'
            smooth={true}
            offset={50}
            duration={1000}>
            <div className='scroll__icon'>
              <img className='scroll__pic' src={scroll} alt='scroll' />
            </div>
            <div className='scroll__text'>Ver más</div>
          </Link>
        </div>
      </div>
      <div className='header__view' data-aos>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic6} alt='pic 6' />
        </div>
        <div className='header__preview'>
          <img
            className='header__pic'
            src={headerPic1}
            alt='pic 1'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${-offsetY * 0.1 - 12}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='header__preview'>
          <img
            className='header__pic'
            src={headerPic2}
            alt='pic 2'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${-offsetY * 0.05 - 4}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic3} alt='pic 3' />
        </div>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic4} alt='pic 4' />
        </div>
        <div className='header__preview'>
          <img
            className='header__pic'
            src={headerPic5}
            alt='pic 5'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${-offsetY * 0.1 - 12}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='header__preview'>
          <img
            className='header__pic'
            src={headerPic7}
            alt='pic 7'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${offsetY * 0.05 - 12}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
      </div>
      <div className='header__figures'>
        <div className='header__figure' data-aos='animation-translate-y'>
          <img
            className='header__pic'
            src={figure1}
            alt='figura 1'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${offsetY * 0.1 + 24}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div
          className='header__figure'
          data-aos='animation-translate-y'
          data-aos-delay='200'>
          <img
            className='header__pic'
            src={figure2}
            alt='figura 2'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${-offsetY * 0.1 - 12}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div
          className='header__figure'
          data-aos='animation-translate-y'
          data-aos-delay='400'>
          <img className='header__pic' src={figure3} alt='figura 3' />
        </div>
      </div>
    </>
  );
};
