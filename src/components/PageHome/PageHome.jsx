import { Details } from '../Details';
import { Works } from '../Works';
import { Portfolio } from '../Portfolio';

export const PageHome = () => {
  return (
    <>
      <Details />
      <Works />
      <div className='wrapper wrapper_gradient'>
        <Portfolio />
      </div>
    </>
  );
};
