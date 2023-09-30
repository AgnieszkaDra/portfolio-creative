import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.css'


export const Dots = (props) => {
    const {
    className,

    span,
    ...otherProps
  } = props

  const spanElement = (spanElement) => {
    const numberOfElements = spanElement;
    const elements = [];

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<div><span key={i}></span></div>);
    }
    return (
      <>
        {elements}
      </>
    );
  }

  return (
    <div
    className={`${classes.root}${className ? ` ${className}` : ''}`}{...otherProps}
    >
      {spanElement(props.span)}
    </div>
  )
  
}

Dots.propTypes = {
  className: PropTypes.string
}

export default Dots