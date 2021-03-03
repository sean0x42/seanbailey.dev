import React from 'react'

import Logo from './Logo'
import Wrapper from './Wrapper'
import Navigation from './Navigation'

const Header: React.FunctionComponent = () => (
  <header>
    <Wrapper>
      <div className="relative z-10 flex items-center justify-between py-4">
        <Logo />
        <Navigation />
      </div>
    </Wrapper>
  </header>
)

export default Header
