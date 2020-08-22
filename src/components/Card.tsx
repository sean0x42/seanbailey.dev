/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import Img, { FluidObject } from 'gatsby-image'

import * as styleRefs from './Card.treat'

interface CardProps {
  image?: FluidObject
  badge?: JSX.Element
}

const Card: FunctionComponent<CardProps> = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.wrapper}>
      {props.badge}
      {props.image && <Img fluid={props.image} className={styles.image} />}
      <div className={styles.body}>{props.children}</div>
    </div>
  )
}

export default Card
