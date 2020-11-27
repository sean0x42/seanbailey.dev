import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import * as styleRefs from './SkipLink.treat'

const SkipLink: FunctionComponent = () => {
  const styles = useStyles(styleRefs)

  return (
    <a href="#main" className={styles.link}>
      Skip to content
    </a>
  )
}

export default SkipLink
