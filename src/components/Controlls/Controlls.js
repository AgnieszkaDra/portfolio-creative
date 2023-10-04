import React from 'react';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data';

import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Main from '../Main/Main';
import About from '../About';

export const ControllsContext = React.createContext();
export const MyContextProvider = ({ children }) => {
 
  
  return (
 <ControllsContext.Provider value={{elementStates, setElementStates}} >   
   </ControllsContext.Provider>  
  );
}

// export const use = React.useContext(MyContextProvider);

export const Controlls = (props) => {
  const {
    className,
    sections,
    ...otherProps
  } = props

 const [elementStates, setElementStates] = useState({
    home: false,
    about: false,
    portfolio: false,
    contact: false,
    // Add more elements as needed
  });


    const keysWithTrueValue = Object.keys(elementStates).filter(key => elementStates[key] === true);
// if(keysWithTrueValue[0] === 'about') {
//  return (
// <>
// <About className={'about-container'}></About>

// </>


//  )
// }
  





  const handleElementClick = (elementName) => {
    alert('handle')
  
    setElementStates((prevState) => ({
      ...prevState,
      [elementName]: !prevState[elementName],
    }));
  }
  // const controlls =document.querySelectorAll('.control')
  // const elements = [
  //   { name: 'home', icon: faHouse , text: 'home'},
  //   { name: 'about', icon: faUser, text: 'user'},
  //   { name: 'portfolio', icon: faBriefcase, text: 'envelope'},
  //   { name: 'contact', icon: faEnvelope , text: 'contact'},
  //   // Add more elements as needed
  // ];

  // const MyContextProvider = ({ children }) => {
 
  
  //   return (
  //
  //   );
  // }

  const use = React.useContext(MyContextProvider);



    return (
 
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >    
    
   
    
    {/* <ControllsContext.Provider value={{elementStates, setElementStates}} >   */}

  {sections.map((element) => (
    
               
    <div key={element.name}
        onClick={() => handleElementClick(element.name)}
        className={elementStates[element.name] ? 'control active-btn' : 'control'}
        data-id = {element.name}
        >
           <FontAwesomeIcon icon={element.icon}  ></FontAwesomeIcon>   
         </div>      
          ))
      
 }


       
  
      {/* </ControllsContext.Provider>   */}
     
    
   
  
    
    

    

  
     
 
</div>
  )
  }

  

export function useMyContext() {
  return React.useContext(Controlls);
}


Controlls.propTypes = {
  className: PropTypes.string
}

export default Controlls
