import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { owlSliderPortfolio } from '../../helpers/owlConfig';
import { PortfolioItem } from './PortfolioItem';
import { cases } from './';

export const Portfolio = () => {
  const { width } = useWindowDimensions();

  return (
    <article className='cases cases_main' id='portfolio'>
      <section className='cases__center center'>
        <div className='cases__stage stage' data-aos='animation-scale-y'>
          Portfolio
        </div>
        <h1
          className='cases__title h1'
          data-aos='animation-scale-y'
          data-aos-delay='150'>
          Casos de <br /> estudio
        </h1>
        <div
          className='cases__nav'
          data-aos='animation-scale-y'
          data-aos-delay='300'>
          <a href='#' className='cases__link active'>
            React
          </a>
          <a href='#' className='cases__link'>
            Web3.0
          </a>
          <a href='#' className='cases__link'>
            NextJS
          </a>
        </div>
        <div className='cases__list' id='slider'>
          {width < 767 ? (
            <OwlCarousel {...owlSliderPortfolio}>
              {cases.map(({ image, delay, title, description, tags, url }) => (
                <PortfolioItem
                  key={image}
                  image={image}
                  delay={delay}
                  title={title}
                  description={description}
                  tags={tags}
                  url={url}
                />
              ))}
            </OwlCarousel>
          ) : (
            cases.map(({ image, delay, title, description, tags, url }) => (
              <PortfolioItem
                key={image}
                image={image}
                delay={delay}
                title={title}
                description={description}
                tags={tags}
                url={url}
              />
            ))
          )}
        </div>
      </section>
    </article>
  );
};
