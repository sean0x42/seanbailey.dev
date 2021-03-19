import React from 'react'
import Copy from './Copy'

const SkipLink: React.FunctionComponent = () => (
  <a
    href="#main"
    className="absolute top-4 left-8 z-20 transition-transform transform -translate-y-10 focus:translate-y-0 focus:outline-none focus:ring ring-teal-500"
  >
    <Copy>Skip to content</Copy>
  </a>
)

export default SkipLink
