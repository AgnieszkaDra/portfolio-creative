import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

export const Icon = (props) => {
  const { icon, className } = props

  return (
    <FontAwesomeIcon icon={icon} className={className}></FontAwesomeIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.string,
}

export default Icon
