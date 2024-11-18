import React, { useEffect, useState } from 'react';
import Headline from '../../ui/Headline';
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
    <header className={`${className ? ` ${className}` : 'header'}`}>
      <Headline />
      <div className={`dot-container--${dotCount}`}>
        {Array.from({ length: dotCount }).map((_, index) => (
          <Dots
            key={index}
            className={`header__dots header__dots-${index}`}
            spanHorizontal={`${dotCount - 1}`}
            spanVertical={`${dotCount - 2}`}
          />
        ))}
      </div>

      <div className={'header__info'}>
        <h3>HI, I'M </h3>
        <h3 className={'header__info--color'}>AGNIESZKA</h3>
        <h3>Frontend developer</h3>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;