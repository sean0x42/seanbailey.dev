import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Image } from '../app/types'

interface CardProps {
  cover?: Image
  coverBg?: string
  coverAlt?: string
  badge?: JSX.Element
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const classes = ['rounded mb-5 leading-none align-middle']
  props.coverBg && classes.push(props.coverBg)

  // Determine which cover image to show
  let cover
  if (props.cover) {
    cover = props.cover.childImageSharp ? (
      <GatsbyImage
        image={props.cover.childImageSharp.gatsbyImageData}
        className={classes.join(' ')}
        aria-hidden="true"
        alt={props.coverAlt}
      />
    ) : (
      <img
        src={props.cover.publicURL}
        className={classes.join(' ')}
        aria-hidden="true"
        alt={props.coverAlt}
      />
    )
  }

  return (
    <div className="relative">
      {props.badge}
      {cover}
      {props.children}
    </div>
  )
}

export default Card
