import type { Metadata } from 'next'
import VisitingCardContent from '@/components/visiting-card-content'

export const metadata: Metadata = {
  title: 'Santanu Sengupta | Insight Vector',
  description:
    'Digital visiting card for Santanu Sengupta, Founder of Insight Vector — strategic advisory, executive coaching and leadership development.',
  alternates: { canonical: '/santanu-sen-visiting-card' },
  // The page is reached by scanning a printed card, not by search.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Santanu Sengupta | Insight Vector',
    description: 'Clarity in Complexity. Direction for What Comes Next.',
    type: 'profile',
    url: '/santanu-sen-visiting-card',
  },
  twitter: {
    card: 'summary',
    title: 'Santanu Sengupta | Insight Vector',
    description: 'Clarity in Complexity. Direction for What Comes Next.',
  },
}

export default function VisitingCardPage() {
  return <VisitingCardContent />
}
