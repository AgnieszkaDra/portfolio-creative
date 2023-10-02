import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const NavbarContext = React.createContext();
export const ChocolateHamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    alert('toggle')
    setIsOpen(!isOpen);
  };
  const {
    className,
    onClick,
    span,
    ...otherProps
  } = props

  const spanElement = (spanElement) => {
    const numberOfElements = spanElement;
    const elements = [];

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<div><span key={i}></span></div>);
    }
    return (
      <>
        {elements}
      </>
    );
  }

  return (
    <div className={`hamburger__icon${isOpen ? '-open' : '-close'}`} onClick={toggleMenu}>
      {spanElement(props.span)}
    </div>
  )
  
}

ChocolateHamburger.propTypes = {
  className: PropTypes.string
}

export default ChocolateHamburger