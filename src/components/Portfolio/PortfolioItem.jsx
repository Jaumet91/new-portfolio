import PropTypes from 'prop-types';

export const PortfolioItem = ({ url, delay }) => {
  return (
    <a
      className='cases__item'
      data-aos='animation-translate-y'
      data-aos-delay={delay}
      href='#'>
      <div className='cases__preview'>
        <img className='cases__pic' src={url} alt='case' />
        <div className='cases__box'>
          Case <br />
          Study
        </div>
      </div>
      <div className='cases__body'>
        <h4 className='cases__info h4'>Collab landing page</h4>
        <div className='cases__text'>UI Kit, Coded Template</div>
      </div>
    </a>
  );
};

PortfolioItem.propTypes = {
  url: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired
};
