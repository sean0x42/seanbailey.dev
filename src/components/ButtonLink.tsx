import React from 'react'
import { Link } from 'gatsby'
import ArrowNarrowRightIcon from './icons/ArrowNarrowRight'

interface ButtonLinkProps {
  className?: string
  to: string
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const classes = ['inline-flex items-center font-medium dark:text-white']
  props.className && classes.push(props.className)

  return (
    <Link className={classes.join(' ')} to={props.to}>
      {props.children}
      <ArrowNarrowRightIcon className="ml-2" />
    </Link>
  )
}

export default ButtonLink
