import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/posts/2026-01-24', destination: '/posts/seven-indie-bands-you-didnt-know', permanent: true },
      { source: '/posts/2026-01-25', destination: '/posts/the-scottish-connection', permanent: true },
      { source: '/posts/2026-01-26', destination: '/posts/the-scottish-connection-part-2', permanent: true },
      { source: '/posts/2026-01-30', destination: '/posts/beyond-nirvana-grunge-era-bands', permanent: true },
      { source: '/posts/2026-01-31', destination: '/posts/beyond-nirvana-part-2', permanent: true },
      { source: '/posts/2026-02-07', destination: '/posts/my-bloody-valentine-evolution', permanent: true },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig);
