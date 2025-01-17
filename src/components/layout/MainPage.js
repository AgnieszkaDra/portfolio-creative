import React from 'react';
import { About, Projects, Contact, BurgerMenu } from '../../components';
import PropTypes from 'prop-types';

export const MainPage = () => {
  alert('This page is currently undergoing reorganization.');
  return (
    <>
    <div className='mobile-nav'>
     <BurgerMenu />  
    </div>
      
     <header className='section header'>
        <div className='header__info'>
          <h1 className="headline">
            HI, 
            I'M <span className="headline__name">AGNIESZKA DRAGAŃCZYK</span>
            <span className="headline__title">FRONTEND DEVELOPER</span>
          </h1>
        </div>
      </header>
      <About />
      
    </>
   
  );
};

MainPage.propTypes = {
  className: PropTypes.string,
};

export default MainPage;