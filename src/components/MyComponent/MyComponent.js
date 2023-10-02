import React from 'react'


import { useState } from 'react';
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const MyComponent = (props) => {
  const [elementStates, setElementStates] = useState({
    element1: false,
    element2: false,
    element3: false,
    // Add more elements as needed
  });

  const handleElementClick = (elementName) => {
    // Toggle the state of the clicked element
    setElementStates((prevState) => ({
      ...prevState,
      [elementName]: !prevState[elementName],
    }));
  };
  const elements = [
    { name: 'element1', text: 'Element 1' },
    { name: 'element2', text: 'Element 2' },
    { name: 'element3', text: 'Element 3' },
    // Add more elements as needed
  ];

  return (
    <div>
    {elements.map((element) => (
      <div
        key={element.name}
        onClick={() => handleElementClick(element.name)}
        className={elementStates[element.name] ? 'active' : ''}
      >
        {element.text}
      </div>
    ))}
  </div>
  )
}

MyComponent.propTypes = {
  className: PropTypes.string
}

export default MyComponent
