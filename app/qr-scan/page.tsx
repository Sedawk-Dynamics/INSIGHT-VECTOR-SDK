import type { Metadata } from 'next'
import QrScanContent from '@/components/qr-scan-content'

export const metadata: Metadata = {
  title: 'Santanu Sengupta | Insight Vector',
  description:
    'Digital visiting card for Santanu Sengupta, Founder of Insight Vector — strategic advisory, executive coaching and leadership development.',
  alternates: { canonical: '/qr-scan' },
  // The page is reached by scanning a printed card, not by search.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Santanu Sengupta | Insight Vector',
    description: 'Clarity in Complexity. Direction for What Comes Next.',
    type: 'profile',
    url: '/qr-scan',
  },
  twitter: {
    card: 'summary',
    title: 'Santanu Sengupta | Insight Vector',
    description: 'Clarity in Complexity. Direction for What Comes Next.',
  },
}

export default function QrScanPage() {
  return <QrScanContent />
}
