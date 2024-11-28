import React from 'react'

import Carousel from '../../ui/Carousel'
import Pagination from '../../ui/Pagination'
// import ContainerBoard from '../../ui/Board/ContainerBoard'
import data from '../../../data/features'

import PropTypes from 'prop-types'

export const About = () => {

  const renderAboutElements = (item, i) => (
    <div className="carousel__element" key={item.name}>
      {/* <figure className="carousel-slider__wrapper">
        <img
          className="carousel-slider__image"
          src={item.image}
          alt={item.altText}
        />
        <figcaption className="js-slider__caption"></figcaption>
      </figure> */}
      
        <h5 className="carousel__title">{item.text}</h5>
     
    </div>
  )

  return (
    <section className={`about`}>
        {/* <ContainerBoard breakpoint={2} dotSize={5}> */}
        <h3 className={'about__title'}>ASPIRING FRONTEND DEVELOPER</h3>
        <Carousel
          className={'about__carousel'}
          value={data.list}
          content={renderAboutElements}
        />
        {/* </ContainerBoard> */}
        {/* <Pagination
        totalPosts = {data.list.length}
        postsPerPage = {1}
        content = {data.list}
        ></Pagination> */}
   
    </section>
  )
}
About.propTypes = {
  className: PropTypes.string,
}

export default About
