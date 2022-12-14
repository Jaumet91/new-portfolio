import PropTypes from 'prop-types';

export const Message = ({ className, width, height }) => {
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
        d='M0.5 2.875C0.5 1.77072 1.39572 0.875 2.5 0.875H15.5C16.6043 0.875 17.5 1.77072 17.5 2.875V12.875C17.5 13.9793 16.6043 14.875 15.5 14.875H11.9684L9.76822 17.5152C9.57823 17.7432 9.29678 17.875 9 17.875C8.70322 17.875 8.42177 17.7432 8.23178 17.5152L6.03162 14.875H2.5C1.39572 14.875 0.5 13.9793 0.5 12.875V2.875ZM15.5 2.875H2.5V12.875H6.5C6.79678 12.875 7.07823 13.0068 7.26822 13.2348L9 15.313L10.7318 13.2348C10.9218 13.0068 11.2032 12.875 11.5 12.875H15.5V2.875ZM3.5 5.875C3.5 5.32272 3.94772 4.875 4.5 4.875H13.5C14.0523 4.875 14.5 5.32272 14.5 5.875C14.5 6.42728 14.0523 6.875 13.5 6.875H4.5C3.94772 6.875 3.5 6.42728 3.5 5.875ZM4.5 8.875C3.94772 8.875 3.5 9.32271 3.5 9.875C3.5 10.4273 3.94772 10.875 4.5 10.875H13.5C14.0523 10.875 14.5 10.4273 14.5 9.875C14.5 9.32271 14.0523 8.875 13.5 8.875H4.5Z'
      />
    </svg>
  );
};

Message.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
