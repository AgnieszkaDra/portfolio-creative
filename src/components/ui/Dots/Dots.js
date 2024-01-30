import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.css'


export const Dots = (props) => {
    const {
    className,
    spanHorizontal,
    spanVertical,
    ...otherProps
  } = props




  const dynamicStyle = (hor, vert) => {
    return {
         display: 'grid', 
         gridTemplateColumns: `repeat(${hor}, 1fr)`,
         gridTemplateRows: `repeat(${vert}, 1fr)`,     
    }
  }

  const dotsStyle = dynamicStyle(props.spanHorizontal, props.spanVertical);

  const dot = () => {
    return {
      width: '7px',
      height: '7px',
      display: 'block',
      borderRadius: '50%',
    }
  }

  const spanElement = (horizontal, vertical) => {
    const numberOfElements = horizontal * vertical;
    const elements = [];

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<span key={i} className=''></span>);
    }
    return (
      <div
      style={dotsStyle}
      >
        {elements}
      </div>
    );
  }
  return (
    <div
    className={`${classes.root}${className ? ` ${className}` : ''}`}{...otherProps}
    >
      {spanElement(props.spanHorizontal, props.spanVertical)}
    </div>
  )
  }
 
Dots.propTypes = {
  className: PropTypes.string
}

export default Dots