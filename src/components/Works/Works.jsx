export const Works = () => {
  return (
    <article className='work'>
      <div className='work__circles'></div>
      <section className='work__center center'>
        <div className='work__wrap'>
          <div className='stage stage_pink' data-aos='animation-scale-y'>
            Donde me encuentro trabajando
          </div>
          <h2
            className='work__title title h1'
            data-aos='animation-scale-y'
            data-aos-delay='150'>
            Full-Stack Developer en Roots Technology
          </h2>
          <div
            className='work__text'
            data-aos='animation-scale-y'
            data-aos-delay='300'>
            Roots Technology es una nueva startup de divulgación y orientación
            de medicina integrativa
          </div>
        </div>
      </section>
    </article>
  );
};
