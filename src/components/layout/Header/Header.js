import React from 'react'
import Headline from '../../ui/Headline'
import Dots from '../../ui/Dots/Dots'

import PropTypes from 'prop-types'

export const Header = (props) => {
  const { className } = props

  return (
    <header className={`${className ? ` ${className}` : ''}`}>
        <Headline/>
        <Dots
          className={'header__dots header__dots-up'}
          spanHorizontal={7}
          spanVertical={3}
        />
        <Dots
          className={'header__dots header__dots-down'}
          spanHorizontal={9}
          spanVertical={3}
        />
        <div className={'header__info'}>
          <h3>HI, I'M </h3>
          <h3>AGNIESZKA</h3>
          <h3>Frontend developer</h3>
          <p>
            I believe that modern websites and applications have the potential
            to enhance every facet of business operations.
            <br />
            With a clear mission to showcase the diverse capabilities of
            software development, I am
            <span className={'header__info--underline'}>on the way</span> to
            demonstrate the power and versatility of innovative solutions
            through examples in portfolio.
          </p>
        </div>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
