import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

import { Send, Profile } from '../icons';

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='screen-reader-text' htmlFor={field.name}>
        {label}
      </label>
      <div className='field__wrap'>
        <input
          className={`field__input ${
            meta.touched && meta.error && 'field__is_invalid'
          }`}
          {...field}
          {...props}
          autoComplete='off'
        />
        <ErrorMessage
          component='div'
          name={field.name}
          className='field__input_error'
        />
        <div className='field__icon'>
          {label === 'email' ? (
            <Send
              className={`${
                meta.touched && meta.error ? 'icon_error' : 'icon'
              }`}
              height={'20'}
              width={'20'}
            />
          ) : (
            <Profile
              className={`${
                meta.touched && meta.error ? 'icon_error' : 'icon'
              }`}
              height={'20'}
              width={'20'}
            />
          )}
        </div>
      </div>
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired
};
