import React from 'react'

interface StackProps {
  className?: string
  space: `mt-${number}`
}

const Stack: React.FunctionComponent<StackProps> = (props) => {
  const wrappedChildren = React.Children.map(props.children, (child) => (
    <div className={`first:mt-0 ${props.space}`}>{child}</div>
  ))

  return <div className={props.className}>{wrappedChildren}</div>
}

export default Stack
