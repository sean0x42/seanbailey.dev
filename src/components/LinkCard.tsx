/** @format */

import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'
import Img, { FluidObject } from 'gatsby-image'

import { ChevronRight } from 'react-feather'
import * as styleRefs from './LinkCard.treat'

interface LinkCardProps {
  className?: string
  to: string
  fluidImage: FluidObject
  moreCopy: string
}

const LinkCard: FunctionComponent<LinkCardProps> = (props) => {
  const styles = useStyles(styleRefs)

  const classes = [styles.card]
  props.className && classes.push(props.className)

  return (
    <Link to={props.to} className={classes.join(' ')}>
      <Img fluid={props.fluidImage} className={styles.image} />

      <div className={styles.body}>
        {props.children}

        <p className={styles.more}>
          {props.moreCopy}
          <ChevronRight />
        </p>
      </div>
    </Link>
  )
}

export default LinkCard
