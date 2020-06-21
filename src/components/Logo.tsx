/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'

import LogoSvg from '../assets/logo.svg'
import * as styleRefs from './Logo.treat'

function Logo() {
  const styles = useStyles(styleRefs)

  return (
    <Link to="/" className={styles.logo}>
      <LogoSvg className={styles.svg} />
    </Link>
  )
}

export default Logo
