/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Figure.treat'
import Caption from './Caption'

interface FigureProps {
  caption?: string
}

const Figure: FunctionComponent<FigureProps> = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <figure className={styles.figure}>
      {props.children}
      {props.caption && <Caption>{props.caption}</Caption>}
    </figure>
  )
}

export default Figure
