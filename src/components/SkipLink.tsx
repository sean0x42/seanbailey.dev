import React from 'react'

const SkipLink: React.FunctionComponent = () => (
  <a
    href="#main"
    className="absolute top-4 left-8 z-20 transition-transform transform -translate-y-10 focus:translate-y-0"
  >
    Skip to content
  </a>
)

export default SkipLink
