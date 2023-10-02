import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const Menu = (props) => {
  const {
    className,
    open,
    ...otherProps
  
  } = props

  return (
    <nav className={'nav'}>
        <ul className={`${'nav__menu'} ${open ? `${'nav__hide'}` : `${'nav__block'}`}`}>
            <li><a href="#home" className={'nav__link'}>Home</a></li>
            <li><a href="#about" className={'nav__link'}>About me</a></li>
            <li><a href="#portfolio" className={'nav__link'}>Portfolio</a></li>
            <li><a href="#contact" className={'nav__link'}>Contact</a></li>
        </ul>
    </nav>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
