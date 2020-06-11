/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { Feather, BookOpen, Icon } from 'react-feather'
import { useStyles } from 'react-treat'

import * as styleRefs from './Navigation.treat'

interface NavigationItemProps {
  url: string
  title: string
  icon: Icon
}

function NavigationItem(props: NavigationItemProps) {
  const styles = useStyles(styleRefs)
  const Icon = props.icon

  return (
    <li>
      <Link
        to={props.url}
        title={props.title}
        className={styles.navigationItem}
      >
        <Icon className={styles.icon} />
        <span>{props.title}</span>
      </Link>
    </li>
  )
}

function Navigation() {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.navigation}>
      <NavigationItem url="/blog" title="Blog" icon={Feather} />
      <NavigationItem url="/portfolio" title="My Projects" icon={BookOpen} />
    </ul>
  )
}

export default Navigation
