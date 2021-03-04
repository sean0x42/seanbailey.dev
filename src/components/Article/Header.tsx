import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Copy from '../Copy'
import Heading from '../Heading'
import { Image } from '../../app/types'

interface HeaderProps {
  coverImage?: Image
  title: string
  date: string
}

const Header: React.FunctionComponent<HeaderProps> = (props) => (
  <div>
    {props.coverImage && (
      <GatsbyImage
        image={props.coverImage.childImageSharp.gatsbyImageData}
        className="bg-gray-900 rounded mb-8"
        alt={props.title}
        aria-hidden={true}
      />
    )}

    <Heading level={1}>{props.title}</Heading>
    {props.date && <Copy className="my-4">{props.date}</Copy>}
  </div>
)

export default Header
