/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Overview.treat'

const Overview: FunctionComponent = (props) => {
  const styles = useStyles(styleRefs)
  return <div className={styles.overview}>{props.children}</div>
}

export default Overview
