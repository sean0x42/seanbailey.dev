/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { Feather, BookOpen } from 'react-feather'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/blog">
            <Feather />
            Blog
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <BookOpen />
            My Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
