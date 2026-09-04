import type { Metadata } from 'next'
import LegalContent, { type LegalSection } from '@/components/legal-content'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { OG_IMAGE, ORGANISATION, SITE_NAME } from '@/lib/site'

const TITLE = 'Terms of Use'
const DESCRIPTION =
  'The terms that govern your use of insightvector.in, including intellectual property, acceptable use and limitation of liability.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/terms-of-use' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/terms-of-use',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
}

const sections: readonly LegalSection[] = [
  {
    heading: 'Acceptance of these terms',
    paragraphs: [
      `By accessing or using insightvector.in you agree to these Terms of Use. If you do not agree with them, please do not use the website. References to “we”, “us” and “our” mean ${SITE_NAME}.`,
    ],
  },
  {
    heading: 'What this website is',
    paragraphs: [
      'This website describes our strategic advisory, executive coaching and leadership development services, and shares insights, media coverage and commentary. It is an informational resource. Using it does not create an advisory, coaching or client relationship between you and Insight Vector — that relationship begins only under a separate written engagement.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'All content on this website — text, articles, insights, frameworks, images, graphics, logos and the Insight Vector name and marks — is owned by Insight Vector or used with permission, and is protected by applicable intellectual property law.',
    ],
    bullets: [
      'You may view, download and print content for your own personal or internal business reference.',
      'You may share a link to any page on this website.',
      'You may not republish, resell, adapt or commercially exploit the content, or present it as your own, without our prior written permission.',
      'Third-party names, logos and publication marks appearing on this site remain the property of their respective owners.',
    ],
  },
  {
    heading: 'Acceptable use',
    paragraphs: ['When using this website, you agree not to:'],
    bullets: [
      'Use it for any unlawful purpose or in breach of any applicable law or regulation.',
      'Attempt to gain unauthorised access to the website, its servers or any connected system.',
      'Introduce malware, or otherwise interfere with the operation, security or availability of the website.',
      'Scrape, harvest or systematically extract content or contact details, including for automated or bulk marketing.',
      'Submit false, misleading or another person’s information through the contact form.',
    ],
  },
  {
    heading: 'Information you submit',
    paragraphs: [
      'You are responsible for the accuracy of anything you send us. Please do not send confidential or commercially sensitive material through the website contact form; use it to start a conversation, and we will agree an appropriate channel for anything sensitive. Information you submit is handled in line with our Privacy Policy.',
    ],
  },
  {
    heading: 'External links',
    paragraphs: [
      'This website links to third-party sites and platforms. Those links are provided for convenience. We do not control those sites, do not endorse everything on them, and are not responsible for their content, accuracy or availability.',
    ],
  },
  {
    heading: 'Availability of the website',
    paragraphs: [
      'We aim to keep the website available and up to date, but we do not guarantee uninterrupted access. We may change, suspend or withdraw any part of the website, or any content on it, at any time and without notice.',
    ],
  },
  {
    heading: 'No warranties',
    paragraphs: [
      'The website and its content are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including any implied warranty of accuracy, fitness for a particular purpose or non-infringement.',
    ],
  },
  {
    heading: 'Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, Insight Vector, its founder and its associates will not be liable for any indirect, incidental, consequential or economic loss — including lost profits, lost business or lost opportunity — arising from your use of, or inability to use, this website or any reliance placed on its content. Nothing in these terms limits liability that cannot be limited under applicable law.',
    ],
  },
  {
    heading: 'Indemnity',
    paragraphs: [
      'You agree to indemnify Insight Vector against any claim, loss or expense arising from your misuse of this website or your breach of these terms.',
    ],
  },
  {
    heading: 'Governing law and jurisdiction',
    paragraphs: [
      `These terms are governed by the laws of India. The courts at ${ORGANISATION.city} have exclusive jurisdiction over any dispute arising out of or in connection with this website or these terms.`,
    ],
  },
  {
    heading: 'Changes to these terms',
    paragraphs: [
      'We may revise these terms from time to time. The version published on this page, bearing the date shown above, is the version that applies. Continuing to use the website after a change means you accept the revised terms.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      `Questions about these terms can be sent to ${ORGANISATION.email} or raised on ${ORGANISATION.telephone}.`,
    ],
  },
]

export default function TermsOfUsePage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: TITLE, path: '/terms-of-use' }]} />
      <LegalContent
        title={TITLE}
        updated="Last updated: 4 September 2026"
        intro="These terms govern your use of insightvector.in. Please read them before using the website."
        sections={sections}
      />
    </>
  )
}
