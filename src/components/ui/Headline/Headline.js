import React from 'react'

import PropTypes from 'prop-types'

export const Headline = (props) => {
  const { className } = props
  return (
    <div className={`${className ? ` ${className}` : 'headline'}`}>
      <h1 className={'headline-h1'}> PORTFOLIO</h1>
      <h2 className={'headline-h2'}> PORTFOLIO</h2>
    </div>
  )
}

Headline.propTypes = {
  className: PropTypes.string,
}

export default Headline
