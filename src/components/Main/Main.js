import React from 'react'
import Section from '../Section/Section'
import MyComponent from '../MyComponent/MyComponent'
import data from '../../data'
import About from '../About'
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
<Section className={'about section two'} data-id ={'about'}></Section>

    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main
