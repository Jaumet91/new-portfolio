import { useContext } from 'react';

import { Context } from '../../context';
import { figure1, figure2, figure3 } from '../../assets/images';

export const Figures = () => {
  const { offsetY } = useContext(Context);

  return (
    <div className='details__figures'>
      <div className='details__figure'>
        <img
          className='details__pic'
          src={figure1}
          alt='pic 1'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${offsetY * 0.1 - 93}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
      <div className='details__figure'>
        <img
          className='details__pic'
          src={figure2}
          alt='pic 2'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${-offsetY * 0.1 + 20}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
      <div className='details__figure'>
        <img
          className='details__pic'
          src={figure3}
          alt='pic 3'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${-offsetY * 0.05 - 12}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
    </div>
  );
};
