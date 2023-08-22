import React from 'react'
import PropTypes from 'prop-types'



import classes from './styles.module.css'
import classesSass from './styles.module.scss'

export const SquareDiv = (props) => {

  const {
    className,
    variantGradient,
    width,
    height,
    positionTop,
    positionLeft,
    ...otherProps
  } = props

  const variantClass = variantGradient
  const widthDiv = props.width
  const heightDiv = props.height
  const positionAbsoluteTop = props.positionTop
  const positionAbsoluteLeft = props.positionLeft

  const positionDiv = {
    width: `${widthDiv}%`,
    height: `${heightDiv}%`,
    position: 'absolute',
    top: `${positionAbsoluteTop}%`,
    left: `${positionAbsoluteLeft}%`
  }

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
      {...otherProps}
      style={positionDiv}
    >

    </div>
  )
}

SquareDiv.propTypes = {
  className: PropTypes.string
}

export default SquareDiv
