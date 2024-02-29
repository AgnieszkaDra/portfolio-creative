import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';
import Controlls from '../../ui/Controlls/Controlls';
import Image from '../../ui/Image/Image';
import data from '../../../data/projects'
import logo from '../../../assets/face.jpg';

import PropTypes from 'prop-types'

export const Projects = (props) => {
  const {
    className
  } = props


  const renderList = (item, i, color) => {
    i++
    return (
      <>
        <li
          key={i}
          className={'features__element'}
        >
          <span className='features__element-number' style={{ backgroundColor: color }}>
            {i}
          </span>
          <div className='features__element-description'>
            {item}
          </div>
        </li>
      </>
    )
  }

  return (
    <section
      className={`${className ? ` ${className}` : ''}`}
    >
      <Controlls className={'controlls'}></Controlls>
      <div className={'projects__container'}>
        {data.categories.map((element) => (
          <div key={element.name}
            className={`project${element.id} project`}
            style={{
              background: `linear-gradient(0deg, ${element.background1}, ${element.background2})`
            }}
            data-id={element.id}
          >
            <div className={`project__headline`}>
              <div className={`project__id`} style={{ backgroundColor: element.mainColor }}>{element.id}.</div>
              <div>
                <h4 className={`project__name`}>{element.name}</h4>
              </div>
            </div>
            <div className={`project__description`}>{element.description}</div>
            <Image
              className={`project__image1`}
              url={element.imageUrl}
              style={{ backgroundColor: 'transparent' }}
              name={logo}
            >
            </Image>
            {
              element.imageUrl2
                ?
                <Image
                  className={`project__image2`}
                  url={element.imageUrl2}
                  style={{ backgroundColor: 'transparent' }}
                  name={logo}
                >
                </Image>
                :
                ''
            }
            <div className={`project__links`}>
              <div>
                {<NavLink
                  className={'links__element'}
                  to={element.githubUrl}
                  style={{ color: element.mainColor }}
                >
                  <FontAwesomeIcon icon={faGithub} className='control__icon'></FontAwesomeIcon> </NavLink>
                }

                {<NavLink
                  className={'links__element'}
                  to={element.viewUrl1}
                  style={{ color: element.mainColor }}
                >
                  <FontAwesomeIcon icon={faFirefox} className='control__icon' ></FontAwesomeIcon> </NavLink>
                }
              </div>
              {
                element.githubUrl2
                  ?
                  <div>
                    {<NavLink
                      className={'links__element'}
                      to={element.githubUrl2}
                      style={{ color: element.mainColor }}
                    >
                      <FontAwesomeIcon icon={faGithub} className='control__icon'></FontAwesomeIcon> </NavLink>
                    }

                    {<NavLink
                      className={'links__element'}
                      to={element.viewUrl2}
                      style={{ color: element.mainColor }}
                    >
                      <FontAwesomeIcon icon={faFirefox} className='control__icon' ></FontAwesomeIcon> </NavLink>
                    }
                  </div>
                  :
                  ''
              }
            </div>
            <div className={`project__features`}>
              <h5 className={`features__headline`}>FEATURES</h5>
              <ul className={'features'}>
                {
                  element.features
                    ?
                    element.features.map((item, i) => {
                      const color = element.mainColor
                      return renderList(item, i, color)
                    })
                    :
                    ''
                }
              </ul>
            </div>

          </div>
        ))
        }
      </div>
    </section>
  )

}
Projects.propTypes = {
  className: PropTypes.string
}

export default Projects
