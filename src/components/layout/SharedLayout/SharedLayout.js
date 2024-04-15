import { Outlet } from 'react-router-dom';

import Navigation from '../../ui/Navigation';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Navigation className={'controlls'} />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
