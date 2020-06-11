/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Header.treat'
import Compass from './Compass'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Navigation from './Navigation'

function Header() {
  const styles = useStyles(styleRefs)

  return (
    <header>
      <Wrapper className={styles.header}>
        <Logo />
        <Navigation />
        <Compass />
      </Wrapper>
    </header>
  )
}

export default Header
