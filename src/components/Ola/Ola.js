import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Ola = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
{'Olsfdjnfdjk fjngf '}
    </div>
  )
}

Ola.propTypes = {
  className: PropTypes.string
}

export default Ola
