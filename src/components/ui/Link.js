import React from 'react'
import PropTypes from 'prop-types'

export const Link = (props) => {
  const { className, values } = props
  return (
    <>
      <a
       
        href={`${values}`}
        target={'blank'}
      >
        {values}
      </a>
    </>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  values: PropTypes.string,
}

export default Link
