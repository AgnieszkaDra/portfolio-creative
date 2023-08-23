import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const SquareDiv = (props) => {

  const {
    className,
    gradient,
    extraClass,
    positionTop,
    positionLeft,
    styles,
    ...otherProps
  } = props

  const variantGradient = gradient
  const variantClass = props.extraClass
  const marginTop = props.positionTop
  const marginLeft = props.positionLeft
  const mql = window.matchMedia("(max-width: 768px)")
  const mqltablet = window.matchMedia("(min-width:769px)")


 

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}${variantGradient ? ` ${variantGradient}` : ''}`}
      {...otherProps}
      
 
    >

    </div>
  )
}

SquareDiv.propTypes = {
  className: PropTypes.string
}

export default SquareDiv
