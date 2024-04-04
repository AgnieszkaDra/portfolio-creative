import React, { useState } from 'react'
import Controlls from '../../ui/Controlls/Controlls'
import features from '../../../data/features'

import PropTypes from 'prop-types'

export const About = (props) => {
  const { className } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSpanIncrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : features.list.length - 1,
    )
  }

  const handleSpanDecrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < features.list.length - 1 ? prevSlide + 1 : 0,
    )
  }

  const renderListItem = (item, i) => (
    <div className="carousel__element" key={i}>
      <figure className="carousel-slider__wrapper photo">
        <img
          className="carousel-slider__image photo__image"
          src={item.image}
          alt={item.altText}
        />
        <figcaption className="js-slider__caption"></figcaption>
      </figure>
      <div className="carousel-description">
        <h5 className="carousel__title headline--h5">{item.text}</h5>
      </div>
    </div>
  )

  const renderedItems = features.list.map((item, i) => renderListItem(item, i))

  return (
    <section className={`${className ? `${className}` : ''}`}>
      <Controlls className={'controlls'}></Controlls>
      <div className={'header__headline'}>
        <h1 className="h1"> PORTFOLIO</h1>
        <h2 className="h2"> PORTFOLIO</h2>
      </div>
      <div className={'about__carousel'}>
        <h3 className={'h3'}>Share your ideas with the world.</h3>
        <div className={'second__carousel carousel'}>
          <div className={'carousel-slider__nav carousel-slider__nav--prev'}>
            <span className={''} onClick={handleSpanDecrease}>
              &lt;
            </span>
          </div>
          {renderedItems[currentSlide]}
          <div className={'carousel-slider__nav carousel-slider__nav--next'}>
            <span onClick={handleSpanIncrease}>&gt;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
About.propTypes = {
  className: PropTypes.string,
}

export default About
