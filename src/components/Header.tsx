/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Header.treat'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Navigation from './Navigation'

function Header() {
  const styles = useStyles(styleRefs)

  return (
    <header>
      <Wrapper className={styles.wrapper}>
        <Logo />
        <Navigation />
      </Wrapper>
    </header>
  )
}

export default Header
