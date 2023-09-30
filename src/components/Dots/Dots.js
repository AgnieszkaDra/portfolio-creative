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

  const dotsStyle = dynamicStyle(props.spanHorizontal, props.spanVertical)

//  

  const spanElement2 = (horizontal, vertical) => {
    const numberOfElements = horizontal * vertical;
    const elements = [];

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<div><span key={i}></span></div>);
    }
    return (
      <div
  style={dotsStyle}
      >
    
        {elements}
      </div>
    );
  }

//   if(normal) {
//     return (
//         <div
//         className={`${classes.root}${className ? ` ${className}` : ''}`}{...otherProps}
//         >
           
//           {spanElement(props.span)}
         
//         </div>
//       )
//   }


     return (
    <div
    className={`${classes.root}${className ? ` ${className}` : ''}`}{...otherProps}
    >
       
      {spanElement2(props.spanHorizontal, props.spanVertical)}
    </div>
  )
  }
 
  


Dots.propTypes = {
  className: PropTypes.string
}

export default Dots