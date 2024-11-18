import React, { useEffect, useState } from 'react';
import Dots from '../../ui/Dots/Dots';
import DotCalculator from './DotCalculator';
import PropTypes from 'prop-types';

export const Header = ({ className }) => {
  const [dotCount, setDotCount] = useState(10); 
  const dotCalculator = new DotCalculator(); 


  const updateDotCount = () => {
    const windowWidth = window.innerWidth;
    setDotCount(dotCalculator.calculate(windowWidth));
  };

  useEffect(() => {
    updateDotCount(); 
    const handleResize = () => {
      updateDotCount(); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <header className={`${className ? ` ${className}` : ''}`}>
      <div className={`dot-container--${dotCount}`}>
        {Array.from({ length: dotCount }).map((_, index) => (
          <Dots
            key={index}
            className={`header__dots header__dots-${index}`}
            spanHorizontal={`${dotCount -2}`}
            spanVertical={`${dotCount -2}`}
          />
        ))}
      </div>
      <h1 className='headline'>
        HI, I'M <span className='headline__name'>AGNIESZKA DRAGAŃCZYK</span>
        <span className='headline__title'>FRONTEND DEVELOPER</span>
      </h1>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;