import React from 'react'
import Controlls from '../../ui/Controlls/Controlls'
import data from '../../../data/projects'
import Carousel from '../../ui/Carousel'

import PropTypes from 'prop-types'

export const Projects = (props) => {
  const { className } = props
  return (
    <section className={`${className ? ` ${className}` : ''}`}>
      <Controlls className={'controlls'}></Controlls>
      <div className={'header__headline'}>
        <h1 className="h1"> PORTFOLIO</h1>
        <h2 className="h2"> PORTFOLIO</h2>
      </div>
      <Carousel
        value={data.categories}
        className={'projects__carousel'}
      ></Carousel>
    </section>
  )
}
Projects.propTypes = {
  className: PropTypes.string,
}

export default Projects
