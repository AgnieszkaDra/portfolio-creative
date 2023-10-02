import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faHouse} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Controlls = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
                <div class="control control-1 active-btn" data-id="home">
                <FontAwesomeIcon icon={faHouse} />
                </div>
                <div class="control control-2" data-id="about">
                <FontAwesomeIcon icon={faUser}/>

                </div>
                <div class="control control-3" data-id="portfolio">
                <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div class="control control-5" data-id="contact">
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>
   
  )
}

Controlls.propTypes = {
  className: PropTypes.string
}

export default Controlls
