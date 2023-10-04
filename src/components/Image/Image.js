import React from 'react'
import PropTypes from 'prop-types'
import Controlls from '../Controlls/Controlls'
import data from '../../data'
import classes from './styles.module.css'

export const Image = (props) => {
  const {
    className,
    name,
    url,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <img
      className={classes.img}
      src={props.url}
      alt={props.name}
      >
      </img>
  
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string
}

export default Image
