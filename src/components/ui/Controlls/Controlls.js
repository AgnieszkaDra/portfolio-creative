import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import data from '../../../data'
import PropTypes from 'prop-types'

export const ControllsContext = React.createContext();

export const Controlls = (props) => {
  const {
    className,
  } = props

  const [elementStates, setElementStates] = useState({
    home: false,
    about: false,
    portfolio: false,
    contact: false,
  });

  const toPage = (value) => {
    return `/${value}`;
  };

  const handleElementClick = (elementName) => {
    alert('click')
    setElementStates((prevState) => ({
      ...prevState,
      [elementName]: !prevState[elementName],
    }));
  }

  return (
    <section
      className={`${className ? ` ${className}` : ''}`}
    >
      <ControllsContext.Provider value={{ elementStates, setElementStates }} >
        <>
          {data.sections.map((element) => (
            <div key={element.name}
              onClick={() => handleElementClick(element.name)}
              className={elementStates[element.name] ? 'control active-btn' : 'control'}
              data-id={element.name}
            >
              <>
                {<NavLink
                  className={'control__link'}
                  to={toPage(element.name)}
                  >
                  {<FontAwesomeIcon icon={element.icon} className='control__icon' ></FontAwesomeIcon>} </NavLink>}
              </>
            </div>
          ))
          }
        </>
      </ControllsContext.Provider>
    </section>
  )
}

Controlls.propTypes = {
  className: PropTypes.string
}

export default Controlls
