import React from 'react'
import Controlls from '../../ui/Controlls/Controlls'
import Headline from '../../ui/Headline'
import Carousel from '../../ui/Carousel'
import data from '../../../data/features'

import PropTypes from 'prop-types'

export const About = (props) => {
  const { className } = props

  const renderAboutElements = (item, i) => (
    <div className="carousel__element" key={item.name}>
      <figure className="carousel-slider__wrapper">
        <img
          className="carousel-slider__image"
          src={item.image}
          alt={item.altText}
        />
        <figcaption className="js-slider__caption"></figcaption>
      </figure>
      <div className="carousel-description">
        <h5 className="carousel__title">{item.text}</h5>
      </div>
    </div>
  )

  return (
    <section className={`${className ? `${className}` : ''}`}>
      
        <Controlls className={'controlls'}/>
        <Headline/>
        <div className={'about__carousel'}>
        <h3 className={'h3'}>Share your ideas with the world.</h3>
        <Carousel
          value={data.list}
          content={renderAboutElements}
        />
        </div>
    </section>
  )
}
About.propTypes = {
  className: PropTypes.string,
}

export default About
