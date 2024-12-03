import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { sections } from '../../../data'
import PropTypes from 'prop-types'

export const Controlls = (props) => {
  const { className } = props

  const [elementStates, setElementStates] = useState({
    home: false,
    about: false,
    portfolio: false,
    contact: false,
  })

  const toPage = (value) => {
    return `/${value}`
  }

  const handleElementClick = (elementName) => {
    setElementStates((prevState) => ({
      ...prevState,
      [elementName]: !prevState[elementName],
    }))
  }

  return (
    <nav className={`${className ? ` ${className}` : ''}`}>
      <ul>
       { sections.map((element) => (
          <li key={element}>
            <NavLink className={'control'} 
              to={toPage(element.name)}  
              key={element.name}
              activeclassname={`${'active-btn'}`}
              onClick={() => handleElementClick(element.name)} 
            >
              <FontAwesomeIcon
                icon={element.icon}
                className="control__icon"
              ></FontAwesomeIcon>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Controlls.propTypes = {
  className: PropTypes.string,
}

export default Controlls
