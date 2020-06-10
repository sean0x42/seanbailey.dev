/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './compass.treat'

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

function Compass() {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.compass} aria-hidden="true">
      <li className={styles.minor}></li>
      {[...range(24, 35)].map(point => (
        <React.Fragment key={point}>
          <li className={styles.major}>{point}0</li>
          <li className={styles.minor} />
        </React.Fragment>
      ))}
    </ul>
  )
}

export default Compass
