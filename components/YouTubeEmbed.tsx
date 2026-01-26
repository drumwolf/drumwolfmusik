export function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video w-full my-4">
      <iframe 
        className="absolute top-0 left-0 w-full h-full" 
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player" 
        // frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />
    </div>
  )
}
