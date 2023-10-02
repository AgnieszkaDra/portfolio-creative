import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Controlls = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const [elementStates, setElementStates] = useState({
    home: false,
    about: false,
    portfolio: false,
    contact: false,
    // Add more elements as needed
  });

  const handleElementClick = (elementName) => {
    alert('handle')
    // Toggle the state of the clicked element
    setElementStates((prevState) => ({
      ...prevState,
      [elementName]: !prevState[elementName],
    }));
  }
  const controlls =document.querySelectorAll('.control')
  const elements = [
    { name: 'home', icon: faHouse , text: 'home'},
    { name: 'about', icon: faUser, text: 'user'},
    { name: 'portfolio', icon: faBriefcase, text: 'envelope'},
    { name: 'contact', icon: faEnvelope , text: 'contact'},
    // Add more elements as needed
  ];

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
          {elements.map((element) => (
    <div key={element.name}
        onClick={() => handleElementClick(element.name)}
        className={elementStates[element.name] ? 'control active-btn' : 'control'}>
    
        <FontAwesomeIcon icon={element.icon}  ></FontAwesomeIcon>
    </div>
    ))}
     
    </div>

  )
}

Controlls.propTypes = {
  className: PropTypes.string
}

export default Controlls
