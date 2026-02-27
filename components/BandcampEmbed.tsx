export function BandcampEmbed({ albumId }: { albumId: string }) {
  return (
    <iframe
      className="border-0 w-full h-70"
      src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/`}
      seamless
    />
  )
}
