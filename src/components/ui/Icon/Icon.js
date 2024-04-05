import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

export const Icon = (props) => {
  const { icon } = props

  return (
    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.string,
}

export default Icon
