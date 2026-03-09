'use client';

import { useState } from 'react';

export function MixCloudEmbed({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="mb-6 bg-gray-200 h-[120px]">
      {!loaded && (
        <div className="animate-pulse bg-gray-200 rounded-md h-12 w-full">Loading...</div>
      )}
      <iframe
        width="100%" height="120"
        src={url}
        onLoad={() => setLoaded(true)}
        allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
      />
    </div>
  )
}
