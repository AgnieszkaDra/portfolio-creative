import React from 'react'
import data from '../../data/projects'
import { Carousel, Image } from '../../components'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFirefox } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

const renderList = (item, i, color) => {
  i++
  return (
    <>
      <li key={i} className={'features__element'}>
        <span
          className="features__element-number"
          style={{ backgroundColor: color }}
        >
          {i}
        </span>
        <div className="features__element-description">{item}</div>
      </li>
    </>
  )
}

const renderProjects = (element, i) => {
console.log(element)
  return (
 <div
    key={element.name}
    className={`project${element.id} project`}
    // style={{
    //   background: `radical-gradient(0deg, ${element.mainColor} 80%, ${element.background1} 20%)`,
    // }}
    style={{
      border: `5px solid ${element.mainColor}`,
    }}
    data-id={element.id}
  >
    <div className={`project__headline`}>
      <div
        className={`project__id`}
        style={{ backgroundColor: element.background1}}
      >
        {element.id}.
      </div>
      <div>
        <h4 className={`project__name`}>{element.name}</h4>
      </div>
    </div>
    <div className={`project__description`}>{element.description}</div>
    <Image
      className={`project__image1`}
      url={element.imageUrl}
      style={{ backgroundColor: 'transparent' }}
    ></Image>
    {element.imageUrl2 ? (
      <Image
        className={`project__image2`}
        url={element.imageUrl2}
        style={{ backgroundColor: 'transparent' }}
      ></Image>
    ) : (
      ''
    )}
    <div className={`project__links`}>
      {
        <NavLink
          className={'project__links--element'}
          to={element.githubUrl}
          style={{ color: element.background1 }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="control__icon"
          ></FontAwesomeIcon>
        </NavLink>
      }
      {
        <NavLink
          className={'project__links--element'}
          to={element.viewUrl1}
          style={{ color: element.background1 }}
        >
          <FontAwesomeIcon
            icon={faFirefox}
            className="control__icon"
          ></FontAwesomeIcon>{' '}
        </NavLink>
      }
      {element.githubUrl2 ? (
        <div>
          {
            <NavLink
              className={'project__links--element'}
              to={element.githubUrl2}
              style={{ color: element.mainColor }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="control__icon"
              ></FontAwesomeIcon>{' '}
            </NavLink>
          }

          {
            <NavLink
              className={'project__links--element'}
              to={element.viewUrl2}
              style={{ color: element.mainColor }}
            >
              <FontAwesomeIcon
                icon={faFirefox}
                className="control__icon"
              ></FontAwesomeIcon>{' '}
            </NavLink>
          }
        </div>
      ) : (
        ''
      )}
    </div>
    <div className={`project__features`}>
      <h5 className={`features__headline`}>FEATURES</h5>
      <ul className={'features'}>
        {element.features
          ? element.features.map((item, i) => {
            const color = element.background1
            return renderList(item, i, color)
          })
          : ''}
      </ul>
    </div>
  </div>

  )
}

export const Projects = () => {
  
  return (
    <section className='section projects'>
      <Carousel
        value={data.categories}
        content={renderProjects}
        className={'projects__carousel'}
      ></Carousel>
    </section>
  )
}

Projects.propTypes = {
  className: PropTypes.string,
}

export default Projects