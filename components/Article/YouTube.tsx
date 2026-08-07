interface YouTubeProps {
  id: string;
  title?: string;
}

const YouTube = ({ id, title = "YouTube video" }: YouTubeProps) => (
  <div className="aspect-video mb-4">
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  </div>
);

export default YouTube;
