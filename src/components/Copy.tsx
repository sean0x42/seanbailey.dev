import React from 'react'

export const Bold: React.FunctionComponent = (props) => (
  <strong className="text-black dark:text-primary-500 font-medium">
    {props.children}
  </strong>
)

interface CopyProps {
  className?: string
  light?: boolean
}

const Copy: React.FunctionComponent<CopyProps> = (props) => {
  const classes = [
    'max-w-prose',
    'font-light',
    props.light
      ? 'text-grey-600 dark:text-grey-300'
      : 'text-grey-900 dark:text-grey-200',
  ]
  props.className && classes.push(props.className)

  return <p className={classes.join(' ')}>{props.children}</p>
}

export default Copy
