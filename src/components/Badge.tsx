/** @format */

import React, { FunctionComponent } from 'react'
import { Icon } from 'react-feather'
import { useStyles } from 'react-treat'

import * as styleRefs from './Badge.treat'

interface BadgeProps {
  icon: Icon
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const Icon = props.icon
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.badge}>
      <Icon className={styles.icon} aria-hidden="true" />
      {props.children}
    </div>
  )
}

export default Badge
