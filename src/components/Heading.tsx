/* eslint-disable jsx-a11y/heading-has-content */
import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Heading.treat'

interface HeadingProps {
  level?: number
  className?: string
}

const Heading: FunctionComponent<HeadingProps> = (props) => {
  const styles = useStyles(styleRefs)

  const levelToClass = {
    1: styles.heading1,
    2: styles.heading2,
    3: styles.heading3,
    4: styles.heading4,
    5: styles.heading5,
    6: styles.heading6,
  }

  const level = props.level ? Math.min(6, Math.max(1, props.level)) : 1

  function computeClassName(): string {
    const classes: Array<string | undefined> = [
      props.className,
      levelToClass[level],
    ]
    return classes.filter((x) => x !== undefined).join(' ')
  }

  const defaultProps = {
    className: computeClassName(),
    children: props.children,
  }
  console.debug(defaultProps)

  switch (level) {
    case 1:
      return <h1 {...defaultProps}></h1>
    case 2:
      return <h2 {...defaultProps}></h2>
  }
}

export default Heading
