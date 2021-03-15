import React from 'react'

const CardLayout: React.FunctionComponent = (props) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-10">
    {props.children}
  </ul>
)

export default CardLayout
