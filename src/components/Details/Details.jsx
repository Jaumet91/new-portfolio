import { Link } from 'react-scroll';

import { ArrowRight } from '../icons';

export const Details = () => {
  return (
    <article className='details' id='details'>
      <section className='details__center center'>
        <div className='details__head' data-aos='animation-scale-y'>
          <div className='stage'>A qué me dedico</div>
          <h2 className='details__info h3'>
            Mi meta es ayudar a las empresas
            <br />a conectar con la tecnología.
          </h2>
        </div>
        <h3 className='details__title' data-aos='animation-scale-y'>
          Sueña ideas. <br /> Créalas.
        </h3>
        <div className='details__btn' data-aos='animation-translate-y'>
          <button className='btn btn_purple'>
            <span className='btn__text'>Escríbeme!</span>
            <ArrowRight className='icon' height={'17'} width={'17'} />
          </button>
        </div>
        <div className='details__container'></div>
      </section>
      <div className='details__figures'></div>
      <a className='details__contact' href='contact'></a>
      <Link
        className='details__contact'
        to='contact'
        data-aos='transform'
        smooth={true}
        offset={50}
        duration={1000}>
        Contact me
        <div className='scroll__text'>Ver más</div>
      </Link>
    </article>
  );
};
