import { Link } from 'react-scroll';

import { WorkCubes } from './';
import { scroll } from '../../assets/images';

export const Works = () => {
  return (
    <article className='work' id='work'>
      <div className='work__circles'></div>
      <section className='work__center center'>
        <div className='work__wrap'>
          <div className='stage stage_pink' data-aos='animation-scale-y'>
            Donde me encuentro trabajando
          </div>
          <h2
            className='work__title title h1'
            data-aos='animation-scale-y'
            data-aos-delay='150'>
            Full-Stack Developer para Roots Technology
          </h2>
          <div
            className='work__text'
            data-aos='animation-scale-y'
            data-aos-delay='300'>
            Roots Technology es una nueva startup centrada en la divulgación de
            conocimientos sobre medicina integrativa
          </div>
          <Link
            className='scroll'
            to='portfolio'
            data-aos='transform'
            smooth={true}
            offset={50}
            duration={1000}>
            <div className='scroll__icon'>
              <img className='scroll__pic' src={scroll} alt='scroll' />
            </div>
            <div className='scroll__text'>Portfolio</div>
          </Link>
        </div>
      </section>
      <WorkCubes />
    </article>
  );
};
