import React from 'react'
import { Link } from 'gatsby'

import { ArrowRightIcon } from './Icons'

interface ButtonLinkProps {
  className?: string
  to: string
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const classes = ['inline-flex items-center font-medium']
  props.className && classes.push(props.className)

  return (
    <Link className={classes.join(' ')} to={props.to}>
      {props.children}
      <ArrowRightIcon className="ml-2" />
    </Link>
  )
}

export default ButtonLink
