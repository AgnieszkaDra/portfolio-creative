import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';
import Controlls from '../../ui/Controlls/Controlls';
import Image from '../../ui/Image/Image';
import data from '../../../data/projects'
import logo from '../../../assets/face.jpg';
import features from '../../../data/features'

import PropTypes from 'prop-types'
import Carousel  from '../../ui/Carousel';

export const Projects = (props) => {
  const {
    className
  } = props
return (
    <section
      className={`${className ? ` ${className}` : ''}`}
    >
      <Controlls className={'controlls'}></Controlls>
      <div className={'header__headline'}>
          <h1 className='h1'> PORTFOLIO</h1>
          <h2 className='h2'> PORTFOLIO</h2>
        </div>
      

   
<Carousel value={data.categories} className={'projects__carousel'}></Carousel>


 
    </section>
  )

}
Projects.propTypes = {
  className: PropTypes.string
}

export default Projects
