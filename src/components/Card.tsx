import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Image } from '../app/types'

interface CardProps {
  cover?: Image
  coverAlt?: string
  badge?: JSX.Element
}

const styles = {
  image: 'rounded mb-2 bg-grey-900 dark:bg-grey-800',
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  // Determine which cover image to show
  let cover
  if (props.cover) {
    cover = props.cover.childImageSharp ? (
      <GatsbyImage
        image={props.cover.childImageSharp.gatsbyImageData}
        className={styles.image}
        aria-hidden="true"
        alt={props.coverAlt}
      />
    ) : (
      <img
        src={props.cover.publicURL}
        className={styles.image}
        aria-hidden="true"
        alt={props.coverAlt}
      />
    )
  }

  return (
    <div>
      {props.badge}
      {cover}
      <div className="styles.body">{props.children}</div>
    </div>
  )
}

export default Card
