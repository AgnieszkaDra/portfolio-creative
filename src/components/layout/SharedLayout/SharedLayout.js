import { Outlet } from 'react-router-dom';

import Controlls from '../../ui/Controlls/Controlls';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Controlls className={'controlls'} />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
