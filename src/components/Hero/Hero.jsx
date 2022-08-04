import { bgMain } from '../../assets/images';

export const Hero = () => {
  return (
    <>
      <div className='header__bg'>
        <img className='header__pic' src={bgMain} />
      </div>
      <div className='center'>
        <div className='header__wrap'>
          <div
            className='header__stage stage aos-init aos-animate'
            data-aos='transform'>
            Jaime Cortes
          </div>
          <div className='header__title title h1'>
            <span
              data-aos='transform'
              data-aos-delay='150'
              className='aos-init aos-animate'>
              Hola!, me
            </span>
            <span
              data-aos='transform'
              data-aos-delay='300'
              className='aos-init aos-animate'>
              llamo Jaime y soy
            </span>
            <span
              data-aos='transform'
              data-aos-delay='450'
              className='aos-init aos-animate'>
              Full-Stack Developer
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
