import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Poppins is used only for the navbar; the rest of the site is Cormorant Garamond.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Insight Vector | Strategic Advisory & Executive Coaching',
  description:
    'Insight Vector is a founder-led strategic advisory, executive coaching and leadership development firm helping founders, CXOs and senior leaders navigate complexity, accelerate growth and build future-ready organisations.',
  keywords: [
    'strategic advisory',
    'executive coaching',
    'leadership development',
    'integrated risk management',
    'responsible AI',
    'Santanu Sengupta',
    'Insight Vector',
  ],
  authors: [{ name: 'Santanu Sengupta' }],
  openGraph: {
    title: 'Insight Vector | Clarity for Complexity',
    description:
      'Strategic Advisory, Executive Coaching & Leadership Development for founders, CXOs and senior leaders.',
    type: 'website',
    url: 'https://insightvector.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight Vector | Clarity for Complexity',
    description: 'Strategic Advisory, Executive Coaching & Leadership Development.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#537AED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${poppins.variable} bg-white`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
