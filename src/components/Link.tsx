import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface LinkProps {
  to: string
  external?: boolean
}

const Link: React.FunctionComponent<LinkProps> = (props) => {
  const styles =
    'underline underline-teal-700 dark:underline-teal-400 text-grey-900 dark:text-white font-normal focus:outline-none focus:ring-2 ring-teal-500'

  if (props.external) {
    return (
      <a href={props.to} className={styles} tabIndex={0}>
        {props.children}
      </a>
    )
  }

  return (
    <GatsbyLink to={props.to} className={styles}>
      {props.children}
    </GatsbyLink>
  )
}

export default Link
