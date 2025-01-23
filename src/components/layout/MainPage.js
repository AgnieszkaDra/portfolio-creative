import React from 'react';
import { Hamburger, Menu } from '../../components';
import { useAppContext } from '../../context/useAppContext';

import PropTypes from 'prop-types';

export const MainPage = () => {
  const { navbarOpen, openNavbar } = useAppContext();

  return (
    <>
      <div className='mobile-nav'>
        <Hamburger />  
      </div>
      <nav className={`${navbarOpen ? `nav open ` : 'nav'}`}>
        <Menu navbarOpen={navbarOpen} navbarOpenFunc={openNavbar}></Menu> 
      </nav>
     
      
      </>
   );
};

MainPage.propTypes = {
  className: PropTypes.string,
};

export default MainPage;