import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

/**
 * Priorities reflect commercial importance: the home page first, then the three
 * service pages that carry the offering, then the content and media pages. The
 * visiting card is deliberately absent — it is noindex, reached by scanning a
 * printed card rather than by search.
 */
const routes = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/strategic-advisory', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/executive-coaching', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/leadership-development', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/featured-insights', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }))
}
