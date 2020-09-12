/** @format */

import React from 'react'
import Img from 'gatsby-image'
import { useStyles } from 'react-treat'

import { FluidImage } from '../../app/types'
import * as styleRefs from './Logo.treat'

interface LogoProps {
  image: FluidImage
}

function Logo(props: LogoProps) {
  const styles = useStyles(styleRefs)

  return props.image.childImageSharp ? (
    <Img className={styles.image} fluid={props.image.childImageSharp.fluid} />
  ) : (
    <img className={styles.image} src={props.image.publicURL} />
  )
}

export default Logo
