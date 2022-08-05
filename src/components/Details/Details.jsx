import { Link } from 'react-scroll';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { owlSliderDetails } from '../../helpers/owlConfig';
import { cursor, hand, color } from '../../assets/images';
import { ArrowRight } from '../icons';
import { DetailsItem } from './';
import { data } from '../../../data';

const { detailsItems } = data;
const imagesDetailsItems = [cursor, hand, color, hand];

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
        <div className='details__container'>
          <OwlCarousel {...owlSliderDetails}>
            {detailsItems.map(({ category, text, classProp, aosDelay }, i) => (
              <DetailsItem
                key={category}
                image={`${imagesDetailsItems[i]}`}
                category={category}
                text={text}
                classProp={classProp}
                aosDelay={aosDelay}
              />
            ))}
          </OwlCarousel>
        </div>
      </section>

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
