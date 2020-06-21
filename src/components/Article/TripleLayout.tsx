/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './TripleLayout.treat'

interface TripleLayoutProps {
  wide: boolean
}

const TripleLayout: FunctionComponent<TripleLayoutProps> = (props) => {
  const styles = useStyles(styleRefs)

  const classes = [styles.layout]
  props.wide && classes.push(styles.wide)

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default TripleLayout
