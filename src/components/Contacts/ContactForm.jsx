import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { InputField, TextAreaField } from './';
import { ArrowRight } from '../icons';

export const ContactForm = () => {
  const validate = Yup.object({
    name: Yup.string().required('Por favor escribe tu nombre'),
    email: Yup.string()
      .email('Por favor escribe un correo válido')
      .required('Por favor introduce un correo'),
    message: Yup.string()
      .min(30, 'Por favor necesitaría más información')
      .required('Dime cómo puedo auyudarte')
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
            <InputField
              label='name'
              type='text'
              name='name'
              placeholder='Nombre'
            />
          </div>
          <div className='contacts__field field'>
            <InputField
              label='email'
              type='email'
              name='email'
              placeholder='Correo'
            />
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
            <TextAreaField
              label='message'
              name='message'
              placeholder='Cuéntame tus ideas'
            />
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
