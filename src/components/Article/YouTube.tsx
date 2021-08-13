import React from "react";

interface YouTubeProps {
  id: string;
  title: string;
}

const YouTube: React.FunctionComponent<YouTubeProps> = (props) => (
  <div className="aspect-w-16 aspect-h-9 mb-4">
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={props.title}
    ></iframe>
  </div>
);

export default YouTube;
