/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Intro.treat'

function Intro() {
  const styles = useStyles(styleRefs)

  return (
    <>
      <p className={styles.blurb}>
        <strong className={styles.strong}>Hey!</strong> I am a{' '}
        <strong className={styles.strong}>designer and developer</strong>{' '}
        currently working at{' '}
        <a
          className={styles.strong}
          href="https://www.nib.com.au"
          target="_blank"
        >
          nib
        </a>
        . Welcome to my home on the web!
      </p>
    </>
  )
}

export default Intro
