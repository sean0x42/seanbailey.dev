/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'

import * as styleRefs from './Logo.treat'

function Logo() {
  const styles = useStyles(styleRefs)

  return (
    <Link to="/" className={styles.nameWrapper}>
      <svg
        className={styles.triangle}
        viewBox="-20 -10 240 180"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="0,0, 100,173.205 200,0"
          fill="none"
          strokeWidth="20px"
        />
      </svg>

      <div className={styles.name}>
        <h1 className={styles.nameHeading}>Sean Bailey</h1>
        <p className={styles.nameSubheading}>
          Digital Designer &amp; Software Developer
        </p>
      </div>
    </Link>
  )
}

export default Logo
