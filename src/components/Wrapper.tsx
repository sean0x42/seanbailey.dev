import React from 'react'

type Width = 'prose' | 'none' | 'screen-xl'

interface WrapperProps {
  className?: string
  width?: `max-w-${Width}`
}

const Wrapper: React.FunctionComponent<WrapperProps> = (props) => {
  const classes = ['mx-auto px-5', props.width ?? 'max-w-screen-xl']

  props.className && classes.push(props.className)

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default Wrapper
