/** @format */

import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { useStyles } from 'react-treat'
import { ChevronRight } from 'react-feather'

import { FluidImage } from '../app/types'
import Card from './Card'
import * as styleRefs from './LinkCard.treat'

interface LinkCardProps {
  className?: string
  to: string
  cover?: FluidImage
  moreCopy: string
  badge?: JSX.Element
}

const LinkCard: FunctionComponent<LinkCardProps> = (props) => {
  const styles = useStyles(styleRefs)

  const classes = [styles.link]
  props.className && classes.push(props.className)

  return (
    <Link to={props.to} className={classes.join(' ')}>
      <Card cover={props.cover} badge={props.badge}>
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
