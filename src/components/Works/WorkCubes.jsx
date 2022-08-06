import { useContext } from 'react';
import {
  // workCube,
  workCube1,
  workCube2,
  workCube3,
  workCube4,
  workCube5,
  workCube6,
  workCube7
} from '../../assets/images';
import { Context } from '../../context';

export const WorkCubes = () => {
  const { offsetY } = useContext(Context);

  return (
    <>
      {/* <div className='work__preview'>
        <img
          className='work__pic'
          src={workCube}
          alt='cube'
          style={{
            willChange: 'transform',
            transform: `translate3d(0px,${offsetY * 0.1}px, 0px)`,
            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
          }}
        />
      </div> */}
      <div className='work__figures'>
        <div className='work__figure'>
          <img
            className='work__pic'
            src={workCube1}
            alt='cube1'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${-offsetY * 0.1 - 10}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='work__figure'>
          <img
            className='work__pic'
            src={workCube2}
            alt='cube2'
            style={{
              willChange: 'transform',
              transform: `translate3d(${-offsetY * 0.1 + 250}px,${
                -offsetY * 0.1 + 250
              }px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='work__figure'>
          <img
            className='work__pic'
            src={workCube3}
            alt='cube3'
            style={{
              willChange: 'transform',
              transform: `translate3d(${offsetY * 0.08 - 200}px,${
                -offsetY * 0.08 + 200
              }px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='work__figure'>
          <img className='work__pic' src={workCube4} alt='cube4' />
        </div>
        <div className='work__figure'>
          <img
            className='work__pic'
            src={workCube5}
            alt='cube5'
            style={{
              willChange: 'transform',
              transform: `translate3d(${-offsetY * 0.05 + 80}px,0px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='work__figure'>
          <img
            className='work__pic'
            src={workCube6}
            alt='cube6'
            style={{
              willChange: 'transform',
              transform: `translate3d(${offsetY * 0.05 - 80}px,0px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
        <div className='work__figure'>
          <img
            className='work__pic'
            src={workCube7}
            alt='cube7'
            style={{
              willChange: 'transform',
              transform: `translate3d(0px,${offsetY * 0.12 - 400}px, 0px)`,
              transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
            }}
          />
        </div>
      </div>
    </>
  );
};
