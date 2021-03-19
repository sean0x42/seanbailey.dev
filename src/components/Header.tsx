import React from 'react'

import Logo from './Logo'
import Wrapper from './Wrapper'
import { Theme } from '../app/themeContext'

interface HeaderProps {
  setTheme: (theme: Theme) => void
}

const Header: React.FunctionComponent<HeaderProps> = (_props) => (
  <header className="pt-5 md:pt-10 mb-20">
    <Wrapper width="max-w-prose md:max-w-screen-xl">
      <div className="relative z-10 flex items-center justify-between">
        <Logo />
        {/* <ThemeToggle setTheme={props.setTheme} /> */}
      </div>
    </Wrapper>
  </header>
)

export default Header
