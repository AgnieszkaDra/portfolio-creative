import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFirefox } from '@fortawesome/free-brands-svg-icons'
import Image from '../Image/Image'
import projects from '../../../data/projects'

export const Carousel = (props) => {
  const { value, className, content } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSpanIncrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : value.length - 1,
    )
  }

  const handleSpanDecrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < value.length - 1 ? prevSlide + 1 : 0,
    )
  }

  const renderedItems = value.map((item, i) => content(item, i))
  console.log(value, content)

  return (
    <div className={`${className ? `${className} carousel` : 'carousel'}`}>
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
  )
}

export default Carousel
