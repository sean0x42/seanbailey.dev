/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './YouTube.treat'

interface YouTubeProps {
  id: string
}

function YouTube(props: YouTubeProps) {
  const styles = useStyles(styleRefs)

  return (
    <iframe
      className={styles.video}
      width="840"
      height="472"
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default YouTube
