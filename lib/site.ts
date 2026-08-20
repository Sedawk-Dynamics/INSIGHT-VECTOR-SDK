/**
 * Single source of truth for anything that appears in metadata, structured data,
 * the sitemap or robots.txt. Keeping it here stops the canonical host drifting
 * between files — the previous metadataBase pointed at insightvector.com, a
 * domain the business does not own, which invalidated every canonical URL.
 */

export const SITE_URL = 'https://www.insightvector.in'

export const SITE_NAME = 'Insight Vector'

export const SITE_DESCRIPTION =
  'Insight Vector is a founder-led strategic advisory, executive coaching and leadership development firm helping founders, CXOs and senior leaders navigate complexity, accelerate growth and build future-ready organisations.'

export const FOUNDER = {
  name: 'Santanu Sengupta',
  jobTitle: 'Founder & CEO',
  email: 'santanu.sengupta@insightvector.in',
  telephone: '+91-98198-32456',
  linkedIn: 'https://www.linkedin.com/in/santanu-sengupta',
  image: `${SITE_URL}/founder-portrait.jpg`,
} as const

export const ORGANISATION = {
  email: 'info@insightvector.com',
  telephone: '+91-9136110496',
  city: 'Mumbai',
  country: 'IN',
  logo: `${SITE_URL}/logo.png`,
} as const

/** Profiles used as sameAs signals so search engines can reconcile entities. */
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/insight-vector/about/',
  'https://www.linkedin.com/in/santanu-sengupta',
  'https://x.com/InsightVector00',
] as const

/** The default social share image. */
export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Insight Vector — Clarity for Complexity. Direction for What Comes Next.',
} as const

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}
