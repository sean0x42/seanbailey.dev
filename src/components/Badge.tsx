import React from 'react'
import { Icon } from './Icons'

interface BadgeProps {
  icon: Icon
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const Icon = props.icon

  return (
    <div className="absolute top-0 right-0 z-10 bg-teal-400 text-grey-900 flex items-center px-3 py-1 rounded-bl rounded-tr pointer-events-none font-medium">
      <Icon className="mr-[4px] flex-shrink-0" />
      {props.children}
    </div>
  )
}

export default Badge
