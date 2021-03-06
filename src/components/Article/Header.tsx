import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Copy from '../Copy'
import Heading from '../Heading'
import Stack from '../layout/Stack'
import { Image } from '../../app/types'

interface HeaderProps {
  coverImage?: Image
  title: string
  date: string
}

const Header: React.FunctionComponent<HeaderProps> = (props) => (
  <>
    {props.coverImage && (
      <GatsbyImage
        image={props.coverImage.childImageSharp.gatsbyImageData}
        className="bg-gray-900 rounded leading-none align-middle mb-8"
        alt={props.title}
        aria-hidden={true}
      />
    )}

    <Stack space="mt-2">
      <Heading level={1}>{props.title}</Heading>
      {props.date && <Copy light>{props.date}</Copy>}
    </Stack>
  </>
)

export default Header
