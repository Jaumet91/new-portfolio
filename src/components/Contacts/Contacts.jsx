import { ContactForm, Figures } from './';
import { Email, Place, Phone, LinkedIn, Github } from '../icons';

export const Contacts = () => {
  return (
    <article className='contacts'>
      <section className='contacts__center center'>
        <div className='contacts__container'>
          <div className='contacts__wrap'>
            <div className='contacts__stage stage' data-aos='animation-scale-y'>
              Salúdame!
            </div>
            <h1 className='contacts__title h1' data-aos='animation-scale-y'>
              Trabajemos <br /> Juntos.
            </h1>
            <div
              className='contacts__info'
              data-aos='animation-scale-y'
              data-aos-delay='400'>
              Hagamos realidad tus ideas de negocio y destaca en el entorno
              digital.
            </div>
          </div>
          <div className='contacts__row'>
            <div className='contacts__details' data-aos='animation-translate-y'>
              <a
                href='mailto:hello@jaimecortesdev.com'
                className='contacts__line'>
                <div className='contacts__icon'>
                  <Email className='icon' height={'20'} width={'20'} />
                </div>
                <div className='contacts__text'>hello@jaimecortesdev.com</div>
              </a>
              <div className='contacts__line'>
                <div className='contacts__icon'>
                  <Place className='icon' height={'20'} width={'20'} />
                </div>
                <div className='contacts__text'>Murcia, España</div>
              </div>
              <a href='tel:+34609431585' className='contacts__line'>
                <div className='contacts__icon'>
                  <Phone className='icon' height={'20'} width={'20'} />
                </div>
                <div className='contacts__text'>+34 609 431 585</div>
              </a>
            </div>
            <ContactForm />
          </div>
          <div className='contacts__social'>
            <div className='contacts__box' data-aos='animation-translate-y'>
              <a
                className='contacts__link'
                href='https://www.linkedin.com/in/jaimecortes91/'
                target='_blank'
                rel='noreferrer'>
                <LinkedIn className='icon' height={'17'} width={'17'} />
                <div className='contacts__text'>LinkedIn</div>
              </a>
            </div>
            <div
              className='contacts__box'
              data-aos='animation-translate-y'
              data-aos-delay='150'>
              <a
                className='contacts__link'
                href='https://github.com/Jaumet91'
                target='_blank'
                rel='noreferrer'>
                <Github className='icon' height={'20'} width={'20'} />
                <div className='contacts__text'>GitHub</div>
              </a>
            </div>
          </div>
          <Figures />
        </div>
      </section>
    </article>
  );
};
