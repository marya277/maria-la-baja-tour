const VideoPlayer = ({ videoUrl, videoType, title }) => {
  if (videoType === 'youtube') {
    return (
      <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        controls
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default VideoPlayer;