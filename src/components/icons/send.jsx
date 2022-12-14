import PropTypes from 'prop-types';

export const Send = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 17 17'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7071 0.667921C16.9776 0.938381 17.0701 1.33942 16.9454 1.70102L11.9454 16.201C11.8123 16.587 11.4579 16.8533 11.0502 16.8738C10.6424 16.8942 10.2631 16.6648 10.092 16.2941L7.09205 9.79409C6.91648 9.41369 6.99665 8.96417 7.2929 8.66792L10.2929 5.66792C10.6834 5.2774 11.3166 5.2774 11.7071 5.66792C12.0976 6.05844 12.0976 6.69161 11.7071 7.08213L9.20017 9.58908L10.8655 13.1974L14.3855 2.98954L4.17803 6.50936L6.40096 7.53502C6.90244 7.7664 7.1214 8.36051 6.89001 8.86198C6.65863 9.36346 6.06453 9.58242 5.56305 9.35103L1.08105 7.28303C0.710317 7.11198 0.480809 6.73271 0.501263 6.32493C0.521717 5.91715 0.788025 5.56276 1.17402 5.42965L15.674 0.429655C16.0356 0.304967 16.4367 0.397461 16.7071 0.667921Z'
      />
    </svg>
  );
};
Send.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
