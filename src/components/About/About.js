import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Controlls from '../Controlls/Controlls';
import Image from '../Image/Image';
import app from '../../assets/app.jpg'
import features from '../../data/features';

export const About = (props) => {
    const {
        className,
    } = props

    const [elementStates, setElementStates] = useState({
        home: false,
        about: false,
        portfolio: false,
        contact: false,

    });

    const [iterate, increaseIterate] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log(currentSlide)

    const resetCount = () => {
        setCurrentSlide(0);
    };

    useEffect(() => {
    }, [iterate]);

    useEffect(() => {
    }, [currentSlide]);

    const handleSpanIncrease = () => {

        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : features.list.length - 1));
        increaseIterate(iterate + 1);
    };

    const handleSpanDecrease = () => {
        setCurrentSlide((prevSlide) => (prevSlide < features.list.length - 1 ? prevSlide + 1 : 0));

        increaseIterate(iterate - 1);
    };

    const renderSliderItems = (item, i) => {


        const eventToUse = isMobile ? 'onClick' : 'onMouseEnter';

        return (
            <div className="features__element" key={i}>
                <figure className="features-slider__wrapper photo">
                    <img className="features-slider__image photo__image" src={item.image} alt={item.altText} />
                    <figcaption className="js-slider__caption">{item.source}</figcaption>
                </figure>
                <div className="features-description">
                    <h4 className="features__title headline--h4">{item.name}</h4>
                    {/* <p className="features__text p">{item.text}</p> */}
                </div>
            </div>
        )
}

    const renderListItem = (item, i) => {
        if (i === iterate) {
            return (
                <div className='features__element' key={i}>
                    <figure className={"features-slider__wrapper photo"}>
                        <img class={"features-slider__image photo__image"} src={item.image} alt="1"></img>
                        <figcaption class="js-slider__caption">źródło: unsplash.com</figcaption>
                    </figure>
                    <div className="features-description">
                        <h4 className={'features__title headline--h4'}>{item.name}</h4>
                        {/* <p className={'features__text p'}>{item.text}</p> */}
                    </div>

                </div>
            )
        }
        else if ((iterate > 2 || iterate < 0) && item.id === 0) {
            resetCount()
            return (
                <div className='features__element' key={i}>
                    <figure className={"features-slider__wrapper photo"}>
                        <img class="features-slider__image" src={item.image} alt="1"></img>
                        <figcaption class="js-slider__caption">źródło: unsplash.com</figcaption>
                    </figure>
                    <div className="features-description">
                        <h4 className={'features__title headline--h4'}>{item.name}</h4>
                        {/* <p className={'features__text p'}>{item.text}</p> */}
                    </div>

                </div>
            )
        }
    }





    const startIndex = currentSlide;
    const endIndex = (currentSlide + 1) % features.list.length;
    const mobileEndIndex = currentSlide % features.list.length

    const isMobile = window.innerWidth <= 900;

    let renderedItems;
    if (!isMobile) {
        if (endIndex > 0) {
            renderedItems = features.list.slice(startIndex, endIndex + 1).map((item, i) => (
              
                renderSliderItems(item, i)
            ));
        } else {
            // resetCount();
            renderedItems = null;
        }
      
    } else {
        if(mobileEndIndex) {
            renderedItems = features.list.map((item, i) => (
           renderListItem(item, i)
        ));  
        } else {
            renderedItems = null
        }
              
        
        
    
    }

    return (
        <section
            className={`${className ? ` ${className}` : ''}`}
        >
            {/* https://pixabay.com/illustrations/app-software-contour-settings-1013616/ */}
            <Controlls className={'about__controlls'}></Controlls>
            <div className={'about__part first'}>
                <h4 className={'headline--h4'}>Any idea?</h4>
                <Image name='app' url={app}></Image>
            </div>
            <div className={'about__part second'}>
                <h3 className={'second__title headline--h3'}>Let's find IT solutions for your business!!!</h3>
                <div className={"second__features features"}>
                    <span class="features-slider__nav features-slider__nav--prev" onClick={handleSpanDecrease}>&lt;</span>
                   
                    {renderedItems}
                    {/* {
                        !isMobile
                            ?

                            endIndex > 1
                                ?
                                features.list.slice(startIndex, endIndex + 1).map((item, i) => {
                                    return renderSliderItems(item, i)
                                })
                                :
                                resetCount()
                            :
                            features.list.map((item, i) => {
                                return renderListItem(item, i)
                            })

                    } */}



                    <span class="features-slider__nav features-slider__nav--next" onClick={handleSpanIncrease}>&gt;</span>
                </div>

            </div>
        </section>
    )

}
About.propTypes = {
    className: PropTypes.string
}

export default About
