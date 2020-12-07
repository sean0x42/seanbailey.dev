import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'
import { ArticleIcon, ContactIcon, ProjectIcon } from './Icons'

import * as styleRefs from './Navigation.treat'

interface NavigationItemProps {
  url: string
  title: string
  icon: FunctionComponent<{ className: string }>
}

const NavigationItem: FunctionComponent<NavigationItemProps> = (props) => {
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

const Navigation: FunctionComponent = () => {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.navigation}>
      <NavigationItem url="/articles" title="Articles" icon={ArticleIcon} />
      <NavigationItem url="/projects" title="Projects" icon={ProjectIcon} />
      <NavigationItem url="/contact" title="Contact" icon={ContactIcon} />
    </ul>
  )
}

export default Navigation
