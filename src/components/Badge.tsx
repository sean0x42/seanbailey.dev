import React from 'react'
import { Icon } from './Icons'

interface BadgeProps {
  icon: Icon
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const Icon = props.icon

  return (
    <div className="styles.badge">
      <Icon />
      {props.children}
    </div>
  )
}

export default Badge
