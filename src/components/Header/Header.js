import React from 'react';
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Image from '../Image/Image';
import Dots from '../Dots';
import Controlls from '../Controlls/Controlls';
import './styles.module.scss'
import logo from '../../assets/face.jpg';


export const Header = (props) => {
  const {
    className
  } = props

  return (
<header
      className={`${classes.root}${className ? ` ${className}` : ''}`}
    >
    
      <>
        <Controlls className={'header__controlls'}></Controlls>
        {<h1 className={'header__text first'}> PORTFOLIO</h1>}
        {<h2 className={'header__text second'}> PORTFOLIO</h2>}
        <Image
          className={'header__image'}
          url={logo}
          name={logo}
        >
        </Image>
        <Dots className={'header__dots--up'} 
        spanHorizontal={3} 
        spanVertical={3}></Dots>
        <Dots className={'header__dots--down'} 
        spanHorizontal={5} 
        spanVertical={3}>
        </Dots>
        {<h3 className={'header__text third'}>HI, I'M </h3>}
        {<h3 className={'header__text'}>HI, I'Mddfbjfdbgjhbjsh </h3>}
        {<h4 className={'header__text fourth'}>AGNIESZKA DRAGAŃCZYK</h4>}
        {<h5 className={'header__text fifth'}>FRONTEND DEVELOPER - STUDENT</h5>}

        {/* <Typography
          variant={'p'}
          className={'header__text p'}>
          I am learning frontend technologies HTML,CSS,SCSS,JS,React.
          <br></br>
          Love to create beautiful and functional websites.
        </Typography> */}
      </>
    </header>
    
    )
    
  }

Header.propTypes = {
  className: PropTypes.string
}

export default Header
