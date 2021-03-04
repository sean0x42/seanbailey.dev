import React from 'react'

import Logo from './Logo'
import Navigation from './Navigation'
import Wrapper from './Wrapper'

const Header: React.FunctionComponent = () => (
  <header>
    <Wrapper>
      <div className="relative z-10 flex items-center justify-between py-4 pb-16">
        <Logo />
        <Navigation />
      </div>
    </Wrapper>
  </header>
)

export default Header
