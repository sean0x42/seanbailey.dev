import React from 'react'

interface HeadingProps {
  level?: number
  className?: string
}

const styles = {
  common: 'text-black dark:text-white',
  '1': 'font-semibold',
  '2': 'font-medium',
  '3': 'font-medium',
  '4': '',
  '5': '',
  '6': '',
}

const Heading: React.FunctionComponent<HeadingProps> = (props) => {
  const level = props.level ? Math.min(6, Math.max(1, props.level)) : 1
  const classes = [styles.common, styles[level.toString()]]
  props.className && classes.push(props.className)

  const HeadingElem = `h${level}`

  return (
    <HeadingElem className={classes.join(' ')}>{props.children}</HeadingElem>
  )
}

export default Heading
