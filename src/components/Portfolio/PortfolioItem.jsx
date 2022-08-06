import PropTypes from 'prop-types';

export const PortfolioItem = ({
  image,
  delay,
  title,
  description,
  tags,
  url
}) => {
  return (
    <a
      className='cases__item'
      data-aos='animation-translate-y'
      data-aos-delay={delay}
      href={url}
      target='_blank'
      rel='noreferrer'>
      <div className='cases__preview'>
        <img className='cases__pic' src={image} alt='case' />
        <div className='cases__box'>
          Ver <br />
          Sitio Web
        </div>
      </div>
      <div className='cases__body'>
        <h4 className='cases__info h4'>{title}</h4>
        <div className='cases__text'>{description}</div>
        <div className='cases__tags'>
          {(
            tags.map(tag => `${tag} - `).splice(0, tags.length - 1) +
            tags[tags.length - 1]
          ).split(',')}
        </div>
      </div>
    </a>
  );
};

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.node.isRequired
};
