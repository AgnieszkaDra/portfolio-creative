import React from 'react'
import PropTypes from 'prop-types'

export const Image = (props) => {
  const { className, name, url, ...otherProps } = props

  return (
    <figure className={`${className ? ` ${className}` : ''}`} {...otherProps}>
      <img className={''} src={props.url} alt={props.name}></img>
    </figure>
  )
}

Image.propTypes = {
  className: PropTypes.string,
}

export default Image
