import React, { FunctionComponent } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStyles } from 'react-treat'

import { FixedImage } from '../../app/types'
import * as styleRefs from './Header.treat'

interface HeaderProps {
  coverImage?: FixedImage
  title: string
  date: string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <div>
      {props.coverImage && (
        <GatsbyImage
          image={props.coverImage.childImageSharp.gatsbyImageData}
          className={styles.image}
        />
      )}

      <h1 className={styles.title}>{props.title}</h1>
      {props.date && <p className={styles.date}>{props.date}</p>}
    </div>
  )
}

export default Header
