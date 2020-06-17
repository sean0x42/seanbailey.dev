/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'

import * as styleRefs from './Logo.treat'

function Logo() {
  const styles = useStyles(styleRefs)

  return (
    <Link to="/" className={styles.logo}>
      <h1 className={styles.name}>
        seanbailey<span className={styles.dotdev}>.dev</span>
      </h1>
      <p className={styles.subheading}>Designer &amp; Software Developer</p>
    </Link>
  )
}

export default Logo
