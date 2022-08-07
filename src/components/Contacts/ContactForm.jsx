import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Message, Send, Profile, ArrowRight } from '../icons';

export const ContactForm = () => {
  const validate = Yup.object({
    name: Yup.string().required('Required')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
      }}>
      {formik => (
        <Form
          // onSubmit={formik.handleSubmit}
          className='contacts__form'
          data-aos='animation-translate-y'
          data-aos-delay='200'>
          <div className='contacts__field field'>
            <label className='screen-reader-text' htmlFor='name'>
              name
            </label>
            <div className='field__wrap'>
              <input
                className='field__input'
                type='text'
                name='name'
                id='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
                placeholder='Nombre'
              />
              <div className='field__icon'>
                <Profile className='icon' height={'20'} width={'20'} />
              </div>
            </div>
          </div>
          <div className='contacts__field field'>
            <label className='screen-reader-text' htmlFor='email'>
              email
            </label>
            <div className='field__wrap'>
              <input
                className='field__input'
                type='email'
                name='email'
                id='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='Correo'
              />
              <div className='field__icon'>
                <Send className='icon' height={'20'} width={'20'} />
              </div>
            </div>
          </div>
          {/* <div className='contacts__field field'>
                <div className='field__wrap'>
                  <select className='field__select' name='question'>
                    <option>Opcion 1</option>
                    <option>Opcion 2</option>
                  </select>
                  <div className='field__icon'>
                    <Arrows className='icon' height={'20'} width={'20'} />
                  </div>
                </div>
              </div> */}
          <div className='contacts__field field'>
            <label className='screen-reader-text' htmlFor='message'>
              message
            </label>
            <div className='field__wrap'>
              <textarea
                className='field__textarea'
                name='message'
                id='message'
                onChange={formik.handleChange}
                value={formik.values.message}
                placeholder='Cuéntame tus ideas'
              />
              <div className='field__icon'>
                <Message className='icon' height={'20'} width={'20'} />
              </div>
            </div>
          </div>
          <div className='contacts__btn'>
            <button
              className='btn btn_purple'
              type='submit'
              disabled={formik.isSubmitting}>
              <span className='btn__text'>Hablemos</span>
              <ArrowRight className='icon' height={'20'} width={'20'} />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
