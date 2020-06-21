/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import * as styleRefs from './Figure.treat'

interface FigureProps {
  caption: string
}

const Figure: FunctionComponent<FigureProps> = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <figure className={styles.figure}>
      {props.children}
      <figcaption className={styles.caption}>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
