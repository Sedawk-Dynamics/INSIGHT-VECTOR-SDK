import type { Metadata } from 'next'
import FeaturedInsightsContent from '@/components/featured-insights-content'

export const metadata: Metadata = {
  title: 'Featured Insights | Insight Vector',
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
    url: '/featured-insights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Insights | Insight Vector',
    description:
      'Perspectives on strategy, governance, risk and leadership for board members, founders and senior leaders.',
  },
}

export default function FeaturedInsightsPage() {
  return <FeaturedInsightsContent />
}
