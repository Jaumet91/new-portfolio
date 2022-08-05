import { PortfolioItem } from './PortfolioItem';
import {
  cases1,
  cases2,
  cases3,
  cases4,
  cases5,
  cases6
} from '../../assets/images';

const cases = [
  { url: cases1, delay: '' },
  { url: cases2, delay: '200' },
  { url: cases3, delay: '' },
  { url: cases4, delay: '200' },
  { url: cases5, delay: '' },
  { url: cases6, delay: '200' }
];

export const Portfolio = () => {
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
        <div className='cases__list'>
          {cases.map(({ url, delay }) => (
            <PortfolioItem key={url} url={url} delay={delay} />
          ))}
        </div>
      </section>
    </article>
  );
};
