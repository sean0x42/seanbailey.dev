/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Header.treat'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  isDarkTheme: boolean
  setDarkTheme(enable: boolean): void
}

function Header(props: HeaderProps) {
  const styles = useStyles(styleRefs)

  return (
    <header>
      <Wrapper className={styles.wrapper}>
        <Logo />

        <div className={styles.navWrapper}>
          <Navigation />
          <ThemeToggle
            isDarkTheme={props.isDarkTheme}
            setDarkTheme={props.setDarkTheme}
          />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
