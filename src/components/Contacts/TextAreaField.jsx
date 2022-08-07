import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

import { Message } from '../icons';

export const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='screen-reader-text' htmlFor={field.name}>
        {label}
      </label>
      <div className='field__wrap'>
        <textarea
          className={`field__textarea ${
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
          <Message
            className={`${meta.touched && meta.error ? 'icon_error' : 'icon'}`}
            height={'16'}
            width={'16'}
          />
        </div>
      </div>
    </>
  );
};

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired
};
