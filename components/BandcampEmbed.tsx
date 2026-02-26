export function BandcampEmbed({ videoId }: { videoId: string }) {
  return (
    <iframe
      style={{ border: 0, width: '100%' }}
      src={`https://bandcamp.com/EmbeddedPlayer/album=${videoId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`}
      seamless
    />
  )
}
