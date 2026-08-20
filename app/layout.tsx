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
  // Google's favicon crawler wants a square icon whose side is a multiple of
  // 48px, fetched from the home page or /favicon.ico, so the full ladder is
  // declared rather than a single 512px file.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon-144.png', type: 'image/png', sizes: '144x144' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
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
  // Google Search Console ownership proof for https://www.insightvector.in/.
  // Emits <meta name="google-site-verification">; the token is public by design
  // and must stay in place, since removing it un-verifies the property.
  verification: {
    google: 'wI17pX_ShcuKHjzz5Nef9cNQL0ySUxJafQ0y3GpfZnk',
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
