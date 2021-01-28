import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './Intro.treat'

const Intro: FunctionComponent = () => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.container}>
      <p>Hello!</p>
      <p>
        I am a <strong className={styles.strong}>designer and developer</strong>{' '}
        in Newcastle, Australia.
        <br />
        Welcome to my home on the web.
      </p>
    </div>
  )
}

export default Intro
