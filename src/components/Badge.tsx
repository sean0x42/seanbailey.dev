import React from 'react'
import { Icon } from 'react-feather'

interface BadgeProps {
  icon: Icon
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const Icon = props.icon

  return (
    <div className="styles.badge">
      <Icon className="styles.icon" aria-hidden="true" />
      {props.children}
    </div>
  )
}

export default Badge
