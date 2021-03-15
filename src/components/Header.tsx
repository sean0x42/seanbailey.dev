import React from 'react'

import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Wrapper from './Wrapper'
import { Theme } from '../app/themeContext'

interface HeaderProps {
  setTheme: (theme: Theme) => void
}

const Header: React.FunctionComponent<HeaderProps> = (props) => (
  <header className="pt-5 md:pt-10">
    <Wrapper>
      <div className="relative z-10 flex items-center justify-between pb-20">
        <Logo />
        <ThemeToggle setTheme={props.setTheme} />
      </div>
    </Wrapper>
  </header>
)

export default Header
