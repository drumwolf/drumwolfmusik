export function SoundCloudEmbed({ url }: { url: string }) {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`

  return (
    <iframe
      title="SoundCloud player"
      className="border-0 w-full h-28"
      scrolling="no"
      allow="autoplay"
      src={src}
    />
  )
}
