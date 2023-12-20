import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';


import Controlls from '../Controlls/Controlls';
import Image from '../Image/Image'
import data from '../../data/projects'
import logo from '../../assets/face.jpg';


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
          <span className='features__element-number' style={{backgroundColor: color }}>
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
      <div className={'projects__container'}>
       {data.categories.map((element) => (
        <div key={element.name}
          className={`project${element.id} project`}
          data-id={element.id}
        >
        <div className={`project${element.id}__headline project__headline`}>
            <div className={`project${element.id}__id project__id`} style={{ backgroundColor: element.mainColor }}>{element.id}.</div>
            <h4 className={`project${element.id}__name project__name`}>{element.name}</h4>
          </div>
          <div className={`project${element.id}__description project__description`}>{element.description}</div>
          <Image
            className={`project${element.id}__image project__image`}
            url={element.imageUrl}
            style={{ backgroundColor: element.mainColor }}
            name={logo}
          >
          </Image>
          {
            element.imageUrl2
              ?
              <Image
                className={`project${element.id}__image2 project__image2`}
                url={element.imageUrl2}
                name={logo}
              >
              </Image>
              :
              ''
          }
          <div className={`project${element.id}__links project__links`}>
            <>
              {<NavLink
                className={'links__element'}
                to={element.githubUrl}
                style={{color: element.mainColor }}
              >
                <FontAwesomeIcon icon={faGithub} className='control__icon'></FontAwesomeIcon> </NavLink>
              }

              {<NavLink
                className={'links__element'}
                to={element.view}
                style={{color: element.mainColor }}
              >
                <FontAwesomeIcon icon={faFirefox} className='control__icon' ></FontAwesomeIcon> </NavLink>
              }
            </>
          </div>
          <div className={`project${element.id}__features project__features`}>
            <h5 className={`headline--h5`}>FEATURES</h5>
            <ul className={'features'}>
              {
                element.features
                  ?
                  element.features.map((item, i) => {
                    const color= element.mainColor
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
      
      <Controlls className={'projects__controlls'}></Controlls>
    </section>
  )

}
Projects.propTypes = {
  className: PropTypes.string
}

export default Projects
