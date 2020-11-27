/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import Img from 'gatsby-image'
import { FluidImage } from '../app/types'

import * as styleRefs from './Card.treat'

interface CardProps {
  cover?: FluidImage
  coverAlt?: string
  badge?: JSX.Element
}

const Card: FunctionComponent<CardProps> = (props) => {
  const styles = useStyles(styleRefs)

  // Determine which cover image to show
  let cover
  if (props.cover) {
    cover = props.cover.childImageSharp ? (
      <Img
        fluid={props.cover.childImageSharp.fluid}
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
    <div className={styles.wrapper}>
      {props.badge}
      {cover}
      <div className={styles.body}>{props.children}</div>
    </div>
  )
}

export default Card
