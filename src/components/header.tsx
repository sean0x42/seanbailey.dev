/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './header.treat'
import Compass from './compass'
import Logo from './logo'
import Social from './social'

function Header() {
  const styles = useStyles(styleRefs)

  return (
    <header className={styles.header}>
      <Logo />
      <Compass />
      <Social />
    </header>
  )
}

export default Header
