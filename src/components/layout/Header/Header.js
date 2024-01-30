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
        {<h1 className={'header__text first'}> PORTFOLIO</h1>}
        {<h2 className={'header__text second'}> PORTFOLIO</h2>}
        <Image
          className={'header__image'}
          url={logo}
          name={logo}
        >
        </Image>
        <Dots className={'header__dots header__dots-up'}
          spanHorizontal={7}
          spanVertical={3}></Dots>
        <Dots className={'header__dots header__dots-down'}
          spanHorizontal={9}
          spanVertical={3}>
        </Dots>
        {<h3 className={'header__text third'}>HI, I'M </h3>}
        {<h4 className={'header__text fourth'}>AGNIESZKA</h4>}
        {<h5 className={'header__text fifth'}>Frontend developer</h5>}
      </>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
