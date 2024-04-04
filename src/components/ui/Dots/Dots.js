import React from 'react'
import PropTypes from 'prop-types'

export const Dots = (props) => {
  const { className, spanHorizontal, spanVertical, ...otherProps } = props

  const dynamicStyle = (hor, vert) => {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${hor}, 1fr)`,
      gridTemplateRows: `repeat(${vert}, 1fr)`,
    }
  }

  const dotsStyle = dynamicStyle(props.spanHorizontal, props.spanVertical)

  const spanElement = (horizontal, vertical) => {
    const numberOfElements = horizontal * vertical
    const elements = []

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(
        <div>
          <span key={i} className="dot"></span>
        </div>,
      )
    }
    return <>{elements}</>
  }
  return (
    <div
      className={`${className ? ` ${className}` : ''}`}
      {...otherProps}
      style={dotsStyle}
    >
      {spanElement(props.spanHorizontal, props.spanVertical)}
    </div>
  )
}

Dots.propTypes = {
  className: PropTypes.string,
}

export default Dots
