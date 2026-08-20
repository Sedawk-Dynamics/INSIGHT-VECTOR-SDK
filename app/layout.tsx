import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'
import { SiteStructuredData } from '@/components/structured-data'
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  // 400 is the lightest weight used; 300 rendered too thin and caused
  // colour fringing from subpixel antialiasing.
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Poppins carries body copy, UI and the navbar.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  // Resolves every relative canonical / OG URL. This must be the domain the
  // business actually owns, or the canonicals point search engines elsewhere.
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Insight Vector | Strategic Advisory, Executive Coaching & Leadership Development',
    // Subpages supply their own title; this appends the brand consistently.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'strategic advisory',
    'executive coaching',
    'leadership development',
    'board advisory',
    'integrated risk management',
    'corporate governance',
    'responsible AI',
    'ESG oversight',
    'executive coach India',
    'Santanu Sengupta',
    'Insight Vector',
  ],
  authors: [{ name: 'Santanu Sengupta', url: SITE_URL }],
  creator: 'Santanu Sengupta',
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  category: 'Business Consulting',
  formatDetection: { email: false, address: false, telephone: false },
  // The IV mark on its white tile, used everywhere. app/favicon.ico is emitted
  // automatically by the file convention and carries the small sizes, so it is
  // deliberately not repeated here.
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Insight Vector | Clarity for Complexity',
    description:
      'Strategic Advisory, Executive Coaching & Leadership Development for founders, CXOs and senior leaders.',
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight Vector | Clarity for Complexity',
    description: 'Strategic Advisory, Executive Coaching & Leadership Development.',
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
      <body className="antialiased font-sans">
        <SiteStructuredData />
        {children}
      </body>
    </html>
  )
}
