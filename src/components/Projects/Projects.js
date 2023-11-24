import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';


import classes from './styles.module.css'
import Image from '../Image/Image'
import data from '../../data/projects'
import logo from '../../assets/face.jpg';


export const Projects = (props) => {
  const {
    className,
   
  } = props

let number = 0
  const renderList = (item, i) => {
   
    number++
    return (
      <>
        <li
          key={i}
          className={'features__element'}
        >
        <span>{number}</span>  {item}
        </li>

      </>
    )
  }



  return (
    <section
      className={`${classes.root}${className ? ` ${className}` : ''}`}

    >
      {data.categories.map((element) => (

        <div key={element.name}

          className={`project${element.id} project`}
          data-id={element.id}
        >

          <div className={`project${element.id}__headline headline`}>
            <div className={`project${element.id}__id id`}>{element.id}.</div>
            <h4 className={`project${element.id}__name name`}>{element.name}</h4>
          </div>
          <div className={`project${element.id}__description description`}>{element.description}</div>
          <Image
            className={`project${element.id}__image description`}
            url={element.imageUrl}
            name={logo}
          >
          </Image>
          {
            element.imageUrl2
              ?
              <Image
                className={`project${element.id}__image2 description`}
                url={element.imageUrl2}
                name={logo}
              >
              </Image>
              :
              ''
          }


          <div className={`project${element.id}__links links`}>
            <>
              {<NavLink
                className={'links__element'}
                to={element.githubUrl}
              >
                <FontAwesomeIcon icon={faGithub} className='control__icon' ></FontAwesomeIcon> </NavLink>
              }

              {<NavLink
                className={'links__element'}
                to={element.view}

              >

                <FontAwesomeIcon icon={faFirefox} className='control__icon' ></FontAwesomeIcon> </NavLink>


              }


            </>


          </div>
          <ul className={`project${element.id}__features features`}>
         
              {
                element.features
                  ?
                  element.features.map((item, i) => {
                    
                    return renderList(item, i)
                  })
                  :
                  ''
              }
          
          </ul>





        </div>
      ))

      }
    </section>
  )

}
Projects.propTypes = {
  className: PropTypes.string
}

export default Projects
