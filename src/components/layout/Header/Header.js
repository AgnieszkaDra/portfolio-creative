import React from 'react';
import Image from '../../ui/Image/Image';
import Dots from '../../ui/Dots/Dots';
import Controlls from '../../ui/Controlls/Controlls';
import logo from '../../../assets/face.jpg'

import PropTypes from 'prop-types'

export const Header = (props) => {
  const {
    className
  } = props

  return (
    <header
      className={`${className ? ` ${className}` : ''}`}
    >
      <>
        <Controlls className={'controlls'}></Controlls>
        <div className={'header__text'}>
          <h1> PORTFOLIO</h1>
          <h2> PORTFOLIO</h2>
        </div>
        <Image
          className={'header__image'}
          url={logo}
          name={logo}
        >
        </Image>
        <Dots
          className={'header__dots header__dots-up'}
          spanHorizontal={7}
          spanVertical={3}
        />
        <Dots
          className={'header__dots header__dots-down'}
          spanHorizontal={9}
          spanVertical={3}
        />
        <div className={'header__info'}>
          <h3>HI, I'M </h3>
          <h3>AGNIESZKA</h3>
          <h3>Frontend developer</h3>
        </div>
      </>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
