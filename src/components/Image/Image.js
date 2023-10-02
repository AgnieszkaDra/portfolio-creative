import React from 'react'
import PropTypes from 'prop-types'
import Controlls from '../Controlls/Controlls'
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
    <Controlls className={'header__controlls'}></Controlls>
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string
}

export default Image
