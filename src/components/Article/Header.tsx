/** @format */

import React from 'react'
import Img from 'gatsby-image'
import { useStyles } from 'react-treat'

import { FluidImage, Attribution } from '../../app/types'
import * as styleRefs from './Header.treat'

interface HeaderProps {
  coverImage: FluidImage
  title: string
  date: string
}

function Header(props: HeaderProps) {
  const styles = useStyles(styleRefs)

  return (
    <div>
      <Img
        className={styles.image}
        fluid={props.coverImage.childImageSharp.fluid}
      />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.date}>{props.date}</p>
    </div>
  )
}

export default Header
