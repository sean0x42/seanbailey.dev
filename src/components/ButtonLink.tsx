/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'
import { Icon, ArrowRight } from 'react-feather'

import * as styleRefs from './ButtonLink.treat'

interface ButtonLinkProps {
  className?: string
  to: string
  icon?: Icon
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = (props) => {
  const styles = useStyles(styleRefs)

  const ButtonIcon = props.icon || ArrowRight

  const classes = [styles.button]
  props.className && classes.push(props.className)

  return (
    <Link className={classes.join(' ')} to={props.to}>
      {props.children}
      <ButtonIcon className={styles.icon} aria-hidden="true" />
    </Link>
  )
}

export default ButtonLink
