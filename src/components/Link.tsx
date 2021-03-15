import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface LinkProps {
  to: string
  external?: boolean
}

const Link: React.FunctionComponent<LinkProps> = (props) => {
  const styles =
    'underline underline-primary-700 dark:underline-primary-400 text-black dark:text-white font-normal transition-colors'

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
