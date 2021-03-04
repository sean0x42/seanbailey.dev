import React from 'react'
import { Link } from 'gatsby'

const Logo: React.FunctionComponent = () => (
  <Link
    to="/"
    className="px-4 py-2 -ml-4 font-medium text-black dark:text-white"
  >
    Sean Bailey
  </Link>
)

export default Logo
