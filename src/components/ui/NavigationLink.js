import React from 'react'
import { useAppContext } from '../../context/useAppContext';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavigationLink = (props) => {
  const { toggleShowNav } = useAppContext()
  const { value } = props
  return (
    <NavLink onClick={toggleShowNav} className={'menu__link link'}>
      <span className='link__decoration'>
      </span>
      {value}
    </NavLink>
  )
}

NavigationLink.propTypes = {
  className: PropTypes.string,
  values: PropTypes.string,
}

export default NavigationLink
