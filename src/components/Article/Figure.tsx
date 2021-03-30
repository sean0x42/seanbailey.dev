import React from 'react'
import Caption from './Caption'

interface FigureProps {
  caption?: string
}

const Figure: React.FunctionComponent<FigureProps> = (props) => (
  <figure className="my-8 -mx-5 sm:mx-0">
    {props.children}
    {props.caption && <Caption>{props.caption}</Caption>}
  </figure>
)

export default Figure
