import React, { useState } from 'react'
import Controlls from '../../ui/Controlls/Controlls';
import Image from '../../ui/Image/Image';
import app from '../../../assets/app.jpg'
import features from '../../../data/features'

import PropTypes from 'prop-types'

export const About = (props) => {
    const {
        className,
    } = props

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSpanIncrease = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : features.list.length - 1));
    };

    const handleSpanDecrease = () => {
        setCurrentSlide((prevSlide) => (prevSlide < features.list.length - 1 ? prevSlide + 1 : 0));
    };


    const renderListItem = (item, i) => (
        <div className="carousel__element" key={i}>
          <figure className="carousel-slider__wrapper photo">
            <img className="carousel-slider__image photo__image" src={item.image} alt={item.altText} />
            <figcaption className="js-slider__caption">{item.source}</figcaption>
          </figure>
          <div className="carousel-description">
            <h4 className="carousel__title headline--h4">{item.name}</h4>
          </div>
        </div>
      );





    const startIndex = currentSlide;
    const endIndex = (currentSlide + 1) % features.list.length;
    const mobileEndIndex = currentSlide % features.list.length

    const isMobile = window.innerWidth <= 900;
     
    const renderedItems = features.list.map((item, i) => renderListItem(item, i));



    return (
        <section
            className={`${className ? ` ${className}` : ''}`}
        >
            {/* https://pixabay.com/illustrations/app-software-contour-settings-1013616/ */}
            <Controlls className={'controlls'}></Controlls>
            <div className={'about__container'}>
                <div className={'about__part first'}>
                <h4 className={'headline--h4'}>Any idea?</h4>
                <Image name='app' url={app}></Image>
            </div>
            <div className={'about__part second'}>
                <h3 className={'second__title headline--h3'}>Let's find IT solutions for your business!!!</h3>
                <div className={"second__carousel carousel"}>
                    <div className={'carousel-slider__nav carousel-slider__nav--prev'}>
                      <span className={""} onClick={handleSpanDecrease}>&lt;</span>  
                    </div>
                    {renderedItems[currentSlide]}
                    <div className={"carousel-slider__nav carousel-slider__nav--next"}>
                       <span onClick={handleSpanIncrease}>&gt;</span> 
                    </div>
                </div>
            </div>  
            </div>
        </section>
    )

}
About.propTypes = {
    className: PropTypes.string
}

export default About
