import React from 'react'
import { Carousel } from '../../components'
import data from '../../data/features'

import PropTypes from 'prop-types'

export const About = () => {

  const renderAboutElements = (item, i) => {
    const textWithLink = item.text.replace("LINK_PLACEHOLDER", item.linkEducation);

    return (
      <div className="carousel__wrapper" key={item.name || i}>
        <p
          className="carousel__content"
          dangerouslySetInnerHTML={{ __html: textWithLink }}
        ></p>
      </div>
    );
  };

  return (
    <section className={`section about`}>
        {/* <ContainerBoard breakpoint={2} dotSize={5}> */}
        {/* <h3 className={'about__title'}>ASPIRING FRONTEND DEVELOPER</h3> */}
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
