import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Navigation from '../Navigation/Navigation';
import Typography from '../Typography/Typography';
import Image from '../Image/Image';
import Dots from '../Dots';
import Controlls from '../Controlls/Controlls';
import About from '../About';
import Ola from '../Ola/Ola';
import data from '../../data'
import './styles.module.scss'
import logo from '../../assets/face.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const sectionContext = React.createContext();

export const ControllsContext = React.createContext();
export const Header = (props) => {
  const {
    className,
    // sections,
    ...otherProps
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    alert('handletoggle')
    setNavbarOpen(!navbarOpen);
  }

  const [elementStates, setElementStates] = useState({
    home: false,
    about: false,
    portfolio: false,
    contact: false,
    // Add more elements as needed
  });

  const handleElementClick = (elementName) => {
    alert('handle')
  
    setElementStates((prevState) => ({
      ...prevState,
      [elementName]: !prevState[elementName],
    }));
  }

  const keysWithTrueValue = Object.keys(elementStates).filter(key => elementStates[key] === true);
  if(keysWithTrueValue[0] === 'about') {
    alert('about')
   return (
  <>
  <About className={'about-container'} {...data}></About>
  
  </>
  
  
   )
  }
    

  return (
    <header
      className={`${classes.root}${className ? ` ${className}` : ''}`}{...otherProps}
    >
      <div className={'header__navigation'}>
        <Navigation></Navigation>
      </div>
      <Typography
        variant={'h1'}
        className={'header__text first'}>
        PORTFOLIO
      </Typography>
      <Typography
        variant={'h2'}
        className={'header__text second'}>
        PORTFOLIO
      </Typography>
      <Image
        className={'header__image'}
        url={logo}
        name={logo}
      >
      </Image>
      <Dots className={'header__dots--up'} spanHorizontal={3} spanVertical={3}></Dots>
      <Dots className={'header__dots--down'} spanHorizontal={5} spanVertical={3}></Dots>
      <Typography
        variant={'h3'}
        className={'header__text third'}>
        HI, I'M
      </Typography>
      <Typography
        variant={'h4'}
        className={'header__text fourth'}>
        AGNIESZKA DRAGAŃCZYK
      </Typography>
      <Typography
        variant={'h5'}
        className={'header__text fifth'}>
        FRONTEND DEVELOPER - STUDENT
      </Typography>
      <Typography
        variant={'p'}
        className={'header__text p'}>
        I am learning frontend technologies HTML,CSS,SCSS,JS,React. 
        <br></br>
        Love to create beautiful and functional websites.
      </Typography>
      <Ola></Ola>
  
          <ControllsContext.Provider value={{elementStates, setElementStates}} > 
          {/* {data.sections.map((element) => (
        <div key={element.name}
        onClick={() => handleElementClick(element.name)}
        className={elementStates[element.name] ? 'control active-btn' : 'control'}
        data-id = {element.name}
        >
         
<FontAwesomeIcon icon={element.icon}></FontAwesomeIcon>   
         </div>      
          ))
    } */}

      {/* <Controlls className={'header__controlls'} {...data} onClick={handleElementClick()}></Controlls>  */}
       </ControllsContext.Provider>  
       <Controlls></Controlls>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
