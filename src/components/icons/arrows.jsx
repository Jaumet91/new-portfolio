import PropTypes from 'prop-types';

export const Arrows = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 18 15'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.66437 1.12759C6.28549 0.790803 5.71453 0.790803 5.33565 1.12759L0.835647 5.12759C0.422864 5.49451 0.385683 6.12658 0.752601 6.53936C1.11952 6.95215 1.75159 6.98933 2.16437 6.62241L6.00001 3.21295L9.83565 6.62241C10.2484 6.98933 10.8805 6.95215 11.2474 6.53936C11.6143 6.12658 11.5772 5.49451 11.1644 5.12759L6.66437 1.12759ZM2.16437 12.1276C1.75159 11.7607 1.11952 11.7979 0.752601 12.2106C0.385683 12.6234 0.422864 13.2555 0.835647 13.6224L5.33565 17.6224C5.71453 17.9592 6.28549 17.9592 6.66437 17.6224L11.1644 13.6224C11.5772 13.2555 11.6143 12.6234 11.2474 12.2106C10.8805 11.7979 10.2484 11.7607 9.83565 12.1276L6.00001 15.5371L2.16437 12.1276Z'
      />
    </svg>
  );
};

Arrows.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
