import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFirefox } from '@fortawesome/free-brands-svg-icons'
import Image from '../Image/Image'
import projects from '../../../data/projects'

export const Carousel = (props) => {
  const { value, className } = props

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

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSpanIncrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : projects.categories.length - 1,
    )
  }

  const handleSpanDecrease = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < projects.categories.length - 1 ? prevSlide + 1 : 0,
    )
  }

  const renderListItem = (element, i) => (
    <div
      key={element.name}
      className={`project${element.id} project`}
      style={{
        background: `linear-gradient(0deg, ${element.background1}, ${element.background2})`,
      }}
      data-id={element.id}
    >
      <div className={`project__headline`}>
        <div
          className={`project__id`}
          style={{ backgroundColor: element.mainColor }}
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
        <div>
          {
            <NavLink
              className={'links__element'}
              to={element.githubUrl}
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
              className={'links__element'}
              to={element.viewUrl1}
              style={{ color: element.mainColor }}
            >
              <FontAwesomeIcon
                icon={faFirefox}
                className="control__icon"
              ></FontAwesomeIcon>{' '}
            </NavLink>
          }
        </div>
        {element.githubUrl2 ? (
          <div>
            {
              <NavLink
                className={'links__element'}
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
                className={'links__element'}
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
                const color = element.mainColor
                return renderList(item, i, color)
              })
            : ''}
        </ul>
      </div>
    </div>
  )

  const renderedItems = value.map((item, i) => renderListItem(item, i))

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
