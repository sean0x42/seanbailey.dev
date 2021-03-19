import React from 'react'
import { Link } from 'gatsby'

const Logo: React.FunctionComponent = () => (
  <Link
    to="/"
    className="font-medium text-black dark:text-white focus:outline-none focus:ring ring-teal-500"
  >
    Sean Bailey
  </Link>
)

export default Logo
