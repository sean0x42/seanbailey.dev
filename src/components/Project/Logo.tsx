import React, { FunctionComponent } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
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
    <GatsbyImage
      image={props.image.childImageSharp.gatsbyImageData}
      className={styles.image}
      alt={props.alt}
    />
  ) : (
    <img className={styles.image} src={props.image.publicURL} alt={props.alt} />
  )
}

export default Logo
