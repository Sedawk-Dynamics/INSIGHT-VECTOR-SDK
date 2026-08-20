import type { Metadata } from 'next'
import FeaturedInsightsContent from '@/components/featured-insights-content'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { OG_IMAGE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Featured Insights on Governance, Risk, AI & Leadership',
  description:
    'Perspectives on strategy, governance, risk and leadership from Santanu Sengupta — including the Boardroom & Beyond newsletter and articles on responsible AI, cyber resilience, ESG and board effectiveness.',
  alternates: {
    canonical: '/featured-insights',
  },
  openGraph: {
    title: 'Featured Insights | Insight Vector',
    description:
      'Perspectives on strategy, governance, risk and leadership for board members, founders and senior leaders.',
    type: 'website',
    images: [OG_IMAGE],
    url: '/featured-insights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Insights | Insight Vector',
    description:
      'Perspectives on strategy, governance, risk and leadership for board members, founders and senior leaders.',
    images: [OG_IMAGE.url],
  },
}

export default function FeaturedInsightsPage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: 'Featured Insights', path: '/featured-insights' }]} />
      <FeaturedInsightsContent />
    </>
  )
}
