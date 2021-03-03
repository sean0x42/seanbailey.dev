import React from 'react'
import Caption from './Caption'

interface FigureProps {
  caption?: string
}

const Figure: React.FunctionComponent<FigureProps> = (props) => (
  <figure className="styles.figure">
    {props.children}
    {props.caption && <Caption>{props.caption}</Caption>}
  </figure>
)

export default Figure
