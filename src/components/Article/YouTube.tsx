import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './YouTube.treat'

interface YouTubeProps {
  id: string
  title: string
}

const YouTube: FunctionComponent<YouTubeProps> = (props) => {
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
      title={props.title}
    ></iframe>
  )
}

export default YouTube
