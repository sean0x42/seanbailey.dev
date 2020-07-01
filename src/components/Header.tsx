/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Header.treat'
import Logo from './Logo'
import Wrapper from './Wrapper'
import Navigation from './Navigation'
import { Radio } from 'react-feather'

function Header() {
  const styles = useStyles(styleRefs)

  return (
    <header>
      <Wrapper>
        <div className={styles.banner}>
          <Radio className={styles.bannerIcon} />
          <p className={styles.bannerCopy}>
            <strong>This site is a work in progess.</strong> Things may be
            broken, boring, or a little weird.
          </p>
        </div>
      </Wrapper>
      <Wrapper className={styles.wrapper}>
        <Logo />
        <Navigation />
      </Wrapper>
    </header>
  )
}

export default Header
