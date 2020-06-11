/** @format */

import React, { FunctionComponent } from 'react'
import './Wrapper.treat'

interface WrapperProps {
  className?: string
}

const Wrapper: FunctionComponent<WrapperProps> = props => {
  const classes = ['wrapper']
  props.className && classes.push(props.className)

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default Wrapper
