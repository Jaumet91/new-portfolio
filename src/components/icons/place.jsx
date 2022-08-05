import PropTypes from 'prop-types';

export const Place = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 18 18'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.27272 0.849581C9.01077 0.635262 8.63406 0.635263 8.37212 0.849584L0.549893 7.24958C0.245932 7.49828 0.20113 7.9463 0.449825 8.25026C0.698521 8.55422 1.14654 8.59902 1.4505 8.35032L8.82242 2.31875L14.6726 7.10517C14.9765 7.35386 15.4245 7.30906 15.6732 7.0051C15.9219 6.70113 15.8771 6.25312 15.5732 6.00443L9.27272 0.849581ZM3.84459 9.22222C3.84459 8.82948 3.52621 8.51111 3.13347 8.51111C2.74074 8.51111 2.42236 8.82948 2.42236 9.22222V16.3333C2.42236 16.7261 2.74074 17.0444 3.13347 17.0444H9.53347C9.92621 17.0444 10.2446 16.7261 10.2446 16.3333C10.2446 15.9406 9.92621 15.6222 9.53347 15.6222H3.84459V9.22222ZM13.7764 9.22183C13.2282 9.2035 12.6956 9.40656 12.2988 9.78527C11.9031 10.1628 11.6756 10.6832 11.6669 11.2298C11.6682 11.4724 11.779 11.8296 12.0251 12.2829C12.2642 12.7231 12.5918 13.1837 12.9332 13.6105C13.2423 13.9968 13.5528 14.3433 13.8002 14.6067C14.0476 14.3433 14.3581 13.9968 14.6671 13.6105C15.0086 13.1837 15.3362 12.7231 15.5753 12.2829C15.8214 11.8296 15.9322 11.4724 15.9335 11.2298C15.9248 10.6832 15.6972 10.1628 15.3016 9.78527C14.9048 9.40656 14.3722 9.2035 13.8239 9.22183C13.8081 9.22236 13.7923 9.22236 13.7764 9.22183ZM16.6446 11.2254H17.3557C17.3557 11.824 17.1108 12.4354 16.8251 12.9616C16.5308 13.5035 16.1473 14.0369 15.7777 14.499C15.406 14.9636 15.0362 15.371 14.7602 15.6616C14.6219 15.8072 14.5061 15.9245 14.4244 16.006C14.3834 16.0468 14.3509 16.0787 14.3283 16.1007L14.3018 16.1264L14.2944 16.1335L14.2913 16.1365L13.8002 15.6222L13.3091 16.1365L13.3059 16.1335L13.2985 16.1264L13.2721 16.1007C13.2494 16.0787 13.2169 16.0468 13.176 16.006C13.0942 15.9245 12.9785 15.8072 12.8401 15.6616C12.5642 15.371 12.1944 14.9636 11.8227 14.499C11.453 14.0369 11.0695 13.5035 10.7753 12.9616C10.4895 12.4354 10.2446 11.824 10.2446 11.2254V11.2159C10.2571 10.2853 10.6436 9.39886 11.3169 8.75634C11.9845 8.1193 12.8784 7.77519 13.8002 7.79969C14.722 7.77519 15.6159 8.1193 16.2835 8.75634C16.9568 9.39886 17.3432 10.2853 17.3557 11.2159L16.6446 11.2254ZM13.3091 16.1365C13.3092 16.1366 13.3093 16.1367 13.8002 15.6222C14.2911 16.1367 14.2912 16.1366 14.2913 16.1365C14.0165 16.3987 13.5838 16.3987 13.3091 16.1365ZM13.8 12.0666C14.1927 12.0666 14.5111 11.7483 14.5111 11.3555C14.5111 10.9628 14.1927 10.6444 13.8 10.6444C13.4072 10.6444 13.0889 10.9628 13.0889 11.3555C13.0889 11.7483 13.4072 12.0666 13.8 12.0666Z'
        fill='#4C40F7'
      />
    </svg>
  );
};
Place.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};