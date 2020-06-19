/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'
import { Award, ChevronRight } from 'react-feather'

import * as styleRefs from './ThanksForReading.treat'

interface ThanksForReadingProps {
  body: JSX.Element
  link: string
}

function ThanksForReading(props: ThanksForReadingProps) {
  const styles = useStyles(styleRefs)

  return (
    <Link to={props.link} className={styles.wrapper}>
      <div className={styles.icon}>
        <Award className={styles.iconInner} />
      </div>

      <div>
        <h2 className={styles.heading}>Thanks for reading!</h2>
        <p className={styles.copy}>{props.body}</p>
        <p className={styles.seeMore}>
          See more
          <ChevronRight />
        </p>
      </div>
    </Link>
  )
}

export default ThanksForReading
