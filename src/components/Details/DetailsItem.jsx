import PropTypes from 'prop-types';

export const DetailsItem = ({ image, category, text, classProp, aosDelay }) => {
  return (
    <div className='details__item'>
      <div
        className={`details__preview details__preview_${classProp}`}
        data-aos='animation-scale'
        data-aos-delay={aosDelay}>
        <div className='details__img'>
          <img className='details__pic' src={image} alt='cursor' />
        </div>
      </div>
      <h5
        className='details__category h5'
        data-aos='animation-scale-y'
        data-aos-delay={aosDelay}>
        {category}
      </h5>
      <div
        className='details__text'
        data-aos='animation-scale-y'
        data-aos-delay={aosDelay}>
        {text}
      </div>
    </div>
  );
};

DetailsItem.propTypes = {
  image: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classProp: PropTypes.string.isRequired,
  aosDelay: PropTypes.string.isRequired
};
