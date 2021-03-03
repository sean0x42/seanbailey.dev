import React from 'react'

interface YouTubeProps {
  id: string
  title: string
}

const YouTube: React.FunctionComponent<YouTubeProps> = (props) => (
  <iframe
    className="styles.video"
    width="840"
    height="472"
    src={`https://www.youtube-nocookie.com/embed/${props.id}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={props.title}
  ></iframe>
)

export default YouTube
