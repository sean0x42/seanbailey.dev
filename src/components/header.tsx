/** @format */

import { Link } from 'gatsby'
import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './header.treat'

function Header() {
  const styles = useStyles(styleRefs)

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.nameWrapper}>
          <svg
            className={styles.triangle}
            viewBox="-20 -10 240 180"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              points="0,0, 100,173.205 200,0"
              fill="none"
              stroke-width="20px"
            />
          </svg>

          <div className={styles.name}>
            <h1>Sean Bailey</h1>
            <p>Digital Designer &amp; Software Developer</p>
          </div>
        </div>
      </Link>
    </header>
  )
}

export default Header
