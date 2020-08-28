/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Caption.treat'

const Caption: FunctionComponent = (props) => {
  const styles = useStyles(styleRefs)
  return <figcaption className={styles.caption}>{props.children}</figcaption>
}

export default Caption
