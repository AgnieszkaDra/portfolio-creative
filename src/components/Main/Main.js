import React from 'react'
import About from '../About/About'
import MyComponent from '../MyComponent/MyComponent'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Main = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <main
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
<About className={'about'}></About>
<MyComponent></MyComponent>
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main
