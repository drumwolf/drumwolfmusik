import { MetadataRoute } from 'next'

export const dynamic = 'force-static'  // ADD THIS LINE

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://drumwolf.org/sitemap.xml',
  }
}
