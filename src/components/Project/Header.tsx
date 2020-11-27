import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import { FluidImage } from '../../app/types'
import * as styleRefs from './Header.treat'

interface HeaderProps {
  coverImage: FluidImage
  title: string
  date: string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.date}>{props.date}</p>
    </div>
  )
}

export default Header
