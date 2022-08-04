import { useEffect, useState } from 'react';

import {
  bgMain,
  scroll,
  headerPic1,
  headerPic2,
  headerPic3,
  headerPic4,
  headerPic5,
  headerPic6,
  headerPic7
} from '../../assets/images';

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  console.log(offsetY);

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
          <a className='scroll' href='#details' data-aos='transform'>
            <div className='scroll__icon'>
              <img className='scroll__pic' src={scroll} alt='scroll' />
            </div>
            <div className='scroll__text'>Muéstrame más</div>
          </a>
        </div>
      </div>
      <div className='header__view' data-aos>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic6} alt='figura 6' />
        </div>
        <div className='header__preview'>
          <img
            className='header__pic'
            src={headerPic1}
            alt='figura 1'
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
            alt='figura 2'
            style={{
              willChange: 'transform',
              transform: 'translate3d(0px, -4px, 0px)',
              transition: 'transform .05s cubic-bezier(0,0,0,1)'
            }}
          />
        </div>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic3} alt='figura 3' />
        </div>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic4} alt='figura 4' />
        </div>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic5} alt='figura 5' />
        </div>
        <div className='header__preview'>
          <img className='header__pic' src={headerPic7} alt='figura 7' />
        </div>
      </div>
    </>
  );
};
