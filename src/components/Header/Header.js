import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import './styles.module.scss'

export const Header = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <header 
    className={`${classes.root}${className ? ` ${className}` : ''}`}{...otherProps}
    >


    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
