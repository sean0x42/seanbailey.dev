/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import * as styleRefs from './Wrapper.treat'

interface WrapperProps {
  className?: string
  thin?: boolean
}

const Wrapper: FunctionComponent<WrapperProps> = (props) => {
  const styles = useStyles(styleRefs)
  const classes = [styles.wrapper]

  props.className && classes.push(props.className)
  props.thin && classes.push(styles.thin)

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default Wrapper
