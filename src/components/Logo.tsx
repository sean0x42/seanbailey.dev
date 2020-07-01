/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'

import * as styleRefs from './Logo.treat'

function Logo() {
  const styles = useStyles(styleRefs)

  return (
    <Link to="/" className={styles.logo}>
      Sean Bailey
    </Link>
  )
}

export default Logo
