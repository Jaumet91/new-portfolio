import { Email, Place, Phone } from '../icons';
export const Contacts = () => {
  return (
    <article className='contacts'>
      <section className='contacts__center center'>
        <div className='contacts__container'>
          <div className='contacts__wrap'>
            <div className='contacts__stage stage' data-aos='animation-scale-y'>
              Say hello!
            </div>
            <h1 className='contacts__title h1' data-aos='animation-scale-y'>
              Lets work <br /> Together.
            </h1>
            <div
              className='contacts__info'
              data-aos='animation-scale-y'
              data-aos-delay='400'>
              to meet up with you to discuss your venture, and potential
              collaborations.
            </div>
          </div>
          <div className='contacts__row'>
            <div className='contacts__details' data-aos='animation-translate-y'>
              <a
                href='mailto:hello@jaimecortesdev.com'
                className='contacts__line'>
                <div className='contacts__icon'>
                  <Email />
                </div>
                <div className='contacts__text'>hello@jaimecortesdev.com</div>
              </a>
              <div className='contacts__line'>
                <div className='contacts__icon'>
                  <Place />
                </div>
                <div className='contacts__text'>Murcia, España</div>
              </div>
              <a href='tel:+34609431585' className='contacts__line'>
                <div className='contacts__icon'>
                  <Phone />
                </div>
                <div className='contacts__text'>+34 609 431 585</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
