/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './compass.treat'

function Compass() {
  const styles = useStyles(styleRefs)
  const points = [24, 25]

  return (
    <ul className={styles.compass} aria-hidden="true">
      {points.map(point => (
        <React.Fragment key={point}>
          <li className={styles.major}>{point}0</li>
          <li className={styles.minor} />
        </React.Fragment>
      ))}
    </ul>
  )
}

export default Compass
