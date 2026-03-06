export function MixCloudEmbed({ url }: { url: string }) {
  return (
    <div className="mb-6">
      <iframe
        width="100%" height="120"
        src={url}
        allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
      />
    </div>
  )
}
