/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import * as styleRefs from './Wrapper.treat'

interface WrapperProps {
  className?: string
}

const Wrapper: FunctionComponent<WrapperProps> = props => {
  const styles = useStyles(styleRefs)
  const classes = []
  props.className && classes.push(props.className)
  classes.push(styles.wrapper)

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default Wrapper
