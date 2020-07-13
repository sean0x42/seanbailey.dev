/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'
import { Award, ChevronRight } from 'react-feather'

import * as styleRefs from './ThanksForReading.treat'

function ThanksForReading() {
  const styles = useStyles(styleRefs)

  return (
    <Link to="/projects" className={styles.wrapper}>
      <div className={styles.icon}>
        <Award className={styles.iconInner} />
      </div>

      <div>
        <h2 className={styles.heading}>Thanks for reading!</h2>
        <p className={styles.copy}>
          If you liked that project, why not check out some of my other work?
        </p>
        <p className={styles.seeMore}>
          See more
          <ChevronRight />
        </p>
      </div>
    </Link>
  )
}

export default ThanksForReading
