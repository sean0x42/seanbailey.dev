/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { Icon, Book, Layers, Send } from 'react-feather'
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
        <Icon className={styles.icon} aria-hidden="true" />
        <span>{props.title}</span>
      </Link>
    </li>
  )
}

function Navigation() {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.navigation}>
      <NavigationItem url="/articles" title="Articles" icon={Book} />
      <NavigationItem url="/projects" title="Projects" icon={Layers} />
      <NavigationItem url="/contact" title="Contact" icon={Send} />
    </ul>
  )
}

export default Navigation
