import type { Metadata } from 'next'
import VisitingCardContent from '@/components/visiting-card-content'
import { OG_IMAGE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Santanu Sengupta — Founder',
  description:
    'Digital visiting card for Santanu Sengupta, Founder of Insight Vector — strategic advisory, executive coaching and leadership development.',
  alternates: { canonical: '/santanu-sen-visiting-card' },
  // The page is reached by scanning a printed card, not by search.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Santanu Sengupta — Founder',
    description: 'Clarity in Complexity. Direction for What Comes Next.',
    type: 'profile',
    images: [OG_IMAGE],
    url: '/santanu-sen-visiting-card',
  },
  twitter: {
    card: 'summary',
    title: 'Santanu Sengupta — Founder',
    description: 'Clarity in Complexity. Direction for What Comes Next.',
    images: [OG_IMAGE.url],
  },
}

export default function VisitingCardPage() {
  return <VisitingCardContent />
}
