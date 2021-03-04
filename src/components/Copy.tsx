import React from 'react'

interface CopyProps {
  className?: string
}

export const Bold: React.FunctionComponent = (props) => (
  <strong className="text-black dark:text-white font-semibold">
    {props.children}
  </strong>
)

const Copy: React.FunctionComponent<CopyProps> = (props) => {
  const classes = ['text-grey-900 dark:text-grey-100']
  props.className && classes.push(props.className)

  return <p className={classes.join(' ')}>{props.children}</p>
}

export default Copy
