import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

interface NavigationItemProps {
  url: string
  title: string
}

const NavigationItem: FunctionComponent<NavigationItemProps> = (props) => (
  <li>
    <Link
      to={props.url}
      title={props.title}
      className="relative z-20 flex flex-col sm:flex-row items-center p-4 font-medium text-black dark:text-white"
    >
      {props.title}
    </Link>
  </li>
)

const Navigation: FunctionComponent = () => (
  <ul className="fixed inset-0 sm:relative flex items-center justify-center">
    <NavigationItem url="/articles" title="Articles" />
    <NavigationItem url="/projects" title="Projects" />
    <NavigationItem url="/contact" title="Contact" />
  </ul>
)

export default Navigation
