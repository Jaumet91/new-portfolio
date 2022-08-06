import { useContext } from 'react';

import { Context } from '../../context';
import { figure2, figure3 } from '../../assets/images';

export const Figures = () => {
  const { offsetY } = useContext(Context);

  return (
    <div className='cases__figures'>
      <div className='cases__figure'>
        <img
          className='cases__pic'
          src={figure2}
          alt='pic 2'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${offsetY * 0.05 - 105}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
      <div className='cases__figure'>
        <img
          className='cases__pic'
          src={figure3}
          alt='pic 3'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${offsetY * 0.1 - 260}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
    </div>
  );
};
