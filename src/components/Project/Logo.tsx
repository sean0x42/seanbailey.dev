import React, { FunctionComponent } from 'react'
import Img from 'gatsby-image'
import { useStyles } from 'react-treat'

import { FluidImage } from '../../app/types'
import * as styleRefs from './Logo.treat'

interface LogoProps {
  image: FluidImage
  alt?: string
}

const Logo: FunctionComponent<LogoProps> = (props) => {
  const styles = useStyles(styleRefs)

  return props.image.childImageSharp ? (
    <Img
      className={styles.image}
      fluid={props.image.childImageSharp.fluid}
      alt={props.alt}
    />
  ) : (
    <img className={styles.image} src={props.image.publicURL} alt={props.alt} />
  )
}

export default Logo
