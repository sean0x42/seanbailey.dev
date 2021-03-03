/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

interface HeadingProps {
  level?: number
  className?: string
}

const Heading: React.FunctionComponent<HeadingProps> = (props) => {
  const levelToClass = {
    1: 'font-bold',
    2: 'font-semibold',
    3: 'font-medium',
    4: 'styles.heading4',
    5: 'styles.heading5',
    6: 'styles.heading6',
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
    case 3:
      return <h3 {...defaultProps}></h3>
  }
}

export default Heading
