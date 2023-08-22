import React from 'react'
import PropTypes from 'prop-types'


import classes from './styles.module.css'
import classesSass from './styles.module.scss'

export const Header = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <header
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div className={classes.footer && classesSass.footer}>Footer</div>

    </header>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Header
