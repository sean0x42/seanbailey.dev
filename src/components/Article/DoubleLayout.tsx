/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './DoubleLayout.treat'

interface DoubleLayoutProps {
  wide?: boolean
  left?: boolean
  right?: boolean
}

const DoubleLayout: FunctionComponent<DoubleLayoutProps> = (props) => {
  const styles = useStyles(styleRefs)

  const classes = [styles.layout]
  props.wide && classes.push(styles.wide)
  props.left && classes.push(styles.left)
  props.right && classes.push(styles.right)

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default DoubleLayout
