import PropTypes from 'prop-types';

export const ArrowRight = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 22 16'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.7071 0.292893C14.3166 -0.0976311 13.6834 -0.0976311 13.2929 0.292893C12.9024 0.683418 12.9024 1.31658 13.2929 1.70711L18.5858 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H18.5858L13.2929 14.2929C12.9024 14.6834 12.9024 15.3166 13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071L21.7071 8.70711C21.8902 8.52405 21.9874 8.28768 21.9989 8.04797C21.9996 8.03199 22 8.016 22 8M21.9241 7.61722C21.8753 7.49927 21.803 7.38877 21.7071 7.29289L14.7071 0.292893M21.9241 7.61722C21.9719 7.73244 21.9988 7.85854 22 7.99077Z'
        fill='white'
      />
    </svg>
  );
};

ArrowRight.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
