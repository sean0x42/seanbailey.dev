/** @format */

import React from 'react'
import Img from 'gatsby-image'
import { useStyles } from 'react-treat'

import { FixedImage } from '../app/types'
import * as styleRefs from './Gallery.treat'

interface GalleryProps {
  images: FixedImage[]
}

function Gallery(props: GalleryProps) {
  const images = props.images.map(image => image.childImageSharp.fixed)
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.src}>
          <Img fixed={image} className={styles.image} />
        </li>
      ))}
    </ul>
  )
}

export default Gallery
