import React from 'react'

interface HeadingProps {
  level?: number
  className?: string
  variant?: 'normal' | 'title'
}

const styles = {
  common: 'text-grey-900 dark:text-white',
  title: 'font-semibold md:font-bold text-2xl md:text-4xl',
  '1': 'font-semibold text-2xl',
  '2': 'font-medium',
  '3': 'font-normal',
}

const Heading: React.FunctionComponent<HeadingProps> = ({
  variant = 'normal',
  ...props
}) => {
  const level = props.level ? Math.min(6, Math.max(1, props.level)) : 1
  const classes = [
    styles.common,
    variant === 'title' ? styles.title : styles[level.toString()],
  ]
  props.className && classes.push(props.className)

  const HeadingElem = `h${level}`

  return (
    <HeadingElem className={classes.join(' ')}>{props.children}</HeadingElem>
  )
}

export default Heading
