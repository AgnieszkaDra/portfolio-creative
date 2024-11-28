import React, { useState } from 'react'

export const Carousel = (props) => {
  const { value, className, content } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSpanIncrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < value.length - 1 ? prevSlide + 1 : 0
    );
  };

  const handleSpanDecrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : value.length - 1
    );
  };

  const renderedItems = value.map((item, i) => content(item, i))
 
  return (
    <div className={`${className ? `${className} carousel` : ''}`}>
      <div className={'carousel-slider__nav carousel-slider__nav--prev'}>
        <span onClick={handleSpanDecrease}>&lt;</span>
      </div>
        {renderedItems[currentSlide]}
      <div className={'carousel-slider__nav carousel-slider__nav--next'}>
        <span onClick={handleSpanIncrease}>&gt;</span>
      </div>
    </div>
  )
}

export default Carousel
