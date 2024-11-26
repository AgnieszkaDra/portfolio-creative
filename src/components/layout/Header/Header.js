import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ className }) => {
  return (
    <header className={`${className ? ` ${className}` : ''}`}>
      <div className='header__info'>
        <h1 className="headline">
          HI, I'M <span className="headline__name">AGNIESZKA DRAGAŃCZYK</span>
          <span className="headline__title">FRONTEND DEVELOPER</span>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;