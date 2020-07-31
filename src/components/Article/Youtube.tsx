/** @format */

import React from 'react'
import {useStyles} from 'react-treat'

import * as styleRefs from './Youtube.treat'

interface YoutubeProps {
  id: string
}

function Youtube(props) {
  const styles = useStyles(styleRefs)

  return (
    <iframe
      className={styles.video}
      width="840"
      height="472"
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  )
}

export default Youtube
