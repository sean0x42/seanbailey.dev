import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Image } from '../../app/types'

interface LogoProps {
  image: Image
  alt?: string
}

const Logo: React.FunctionComponent<LogoProps> = (props) =>
  props.image.childImageSharp ? (
    <GatsbyImage
      image={props.image.childImageSharp.gatsbyImageData}
      className="styles.image"
      alt={props.alt}
    />
  ) : (
    <img className="styles.image" src={props.image.publicURL} alt={props.alt} />
  )

export default Logo
