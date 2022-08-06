import { useContext } from 'react';

import { Context } from '../../context';
import {
  figures1,
  figures2,
  figures3,
  figures4,
  figures5,
  figures6
} from '../../assets/images';

export const Figures = () => {
  const { offsetY } = useContext(Context);
  return (
    <div className='figures'>
      <div className='figures__preview'>
        <img className='figures__pic' src={figures1} alt='figures1' />
      </div>
      <div className='figures__preview'>
        <img
          className='figures__pic'
          src={figures2}
          alt='figures2'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${-offsetY * 0.1 + 500}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
      <div className='figures__preview'>
        <img
          className='figures__pic'
          src={figures3}
          alt='figures3'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${-offsetY * 0.03 + 120}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
      <div className='figures__preview'>
        <img className='figures__pic' src={figures4} alt='figures4' />
      </div>
      <div className='figures__preview'>
        <img
          className='figures__pic'
          src={figures5}
          alt='figures5'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${offsetY * 0.09 - 420}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
      <div className='figures__preview'>
        <img
          className='figures__pic'
          src={figures6}
          alt='figures6'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${-offsetY * 0.09 + 420}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div>
    </div>
  );
};
