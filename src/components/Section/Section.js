import React from 'react'
import About from '../About'
import Controlls from '../Controlls/Controlls'
import { useMyContext } from '../Controlls/Controlls'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Section = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const sharedValue = useMyContext()

  const forwardSection = (elements) => {
    alert('forward')
    console.log(elements.name)
    // Toggle the state of the clicked element
    // setElementStates((prevState) => ({
    //   ...prevState,
    //   [elementName]: !prevState[elementName],
    // }));
  }

  return (
   
       <section
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
      onClick = {() => {forwardSection()}}
    >
      <About onClick={sharedValue}></About>

    </section> 
 
  
  )
}

Section.propTypes = {
  className: PropTypes.string
}

export default Section
