import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'

import * as styleRefs from './ButtonLink.treat'
import { ArrowRightIcon } from './Icons'

interface ButtonLinkProps {
  className?: string
  to: string
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = (props) => {
  const styles = useStyles(styleRefs)

  const classes = [styles.button]
  props.className && classes.push(props.className)

  return (
    <Link className={classes.join(' ')} to={props.to}>
      {props.children}
      <ArrowRightIcon className={styles.icon} />
    </Link>
  )
}

export default ButtonLink
