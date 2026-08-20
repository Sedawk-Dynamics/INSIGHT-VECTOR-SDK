import type { Metadata } from 'next'
import GalleryContent from '@/components/gallery-content'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { OG_IMAGE } from '@/lib/site'

const TITLE = 'Media & Gallery — Speaking Engagements, Podcasts & Press'
const DESCRIPTION =
  'Speaking engagements, panels, podcasts and press coverage featuring Santanu Sengupta — including NDTV, ET Edge Insights, Fortune India, ANI News, Director Today and IIT Bombay.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/gallery',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION , images: [OG_IMAGE.url] },
}

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: 'Media & Gallery', path: '/gallery' }]} />
      <GalleryContent />
    </>
  )
}
