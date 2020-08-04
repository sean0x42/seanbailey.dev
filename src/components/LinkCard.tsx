/** @format */

import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'
import { FluidObject } from 'gatsby-image'

import Card from './Card'
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

  const classes = [styles.link]
  props.className && classes.push(props.className)

  return (
    <Link to={props.to} className={classes.join(' ')}>
      <Card image={props.fluidImage}>
        {props.children}

        <p className={styles.more}>
          {props.moreCopy}
          <ChevronRight />
        </p>
      </Card>
    </Link>
  )
}

export default LinkCard
