import { useState, useEffect } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { owlSliderPortfolio } from '../../helpers/owlConfig';
import { PortfolioItem } from './PortfolioItem';
import { cases, Figures } from './';

export const Portfolio = () => {
  const [projects, setProjects] = useState(cases);
  const [filterCases, setFilterCases] = useState(cases);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const { width } = useWindowDimensions();

  const handleCaseFilter = item => {
    setActiveFilter(item);

    item === 'Todos'
      ? setFilterCases(projects)
      : setFilterCases(
          projects.filter(project => project.filter.includes(item))
        );
  };

  useEffect(() => {
    setProjects(cases);
  }, []);

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
          {['Todos', 'React', 'Web3.0', 'NextJS'].map(item => (
            <div
              key={item}
              onClick={() => handleCaseFilter(item)}
              className={`cases__link ${
                activeFilter === item ? 'active' : ''
              }`}>
              {item}
            </div>
          ))}
        </div>
        <div className='cases__list' id='slider'>
          {width < 768 ? (
            <OwlCarousel {...owlSliderPortfolio}>
              {filterCases.map(
                ({ image, delay, title, description, tags, url }) => (
                  <PortfolioItem
                    key={image}
                    image={image}
                    delay={delay}
                    title={title}
                    description={description}
                    tags={tags}
                    url={url}
                  />
                )
              )}
            </OwlCarousel>
          ) : (
            filterCases.map(
              ({ image, delay, title, description, tags, url }) => (
                <PortfolioItem
                  key={image}
                  image={image}
                  delay={delay}
                  title={title}
                  description={description}
                  tags={tags}
                  url={url}
                />
              )
            )
          )}
        </div>
      </section>
      <Figures />
    </article>
  );
};
