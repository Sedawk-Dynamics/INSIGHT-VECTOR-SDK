import type { Metadata } from 'next'
import LegalContent, { type LegalSection } from '@/components/legal-content'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { OG_IMAGE, ORGANISATION } from '@/lib/site'

const TITLE = 'Privacy Policy'
const DESCRIPTION =
  'How Insight Vector collects, uses, stores and protects the personal information you share through insightvector.in.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/privacy-policy',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
}

const sections: readonly LegalSection[] = [
  {
    heading: 'Information we collect',
    paragraphs: [
      'We only collect information you choose to give us, together with basic technical data that any website receives when a page is requested.',
    ],
    bullets: [
      'Information you submit through the contact form: your name, email address, company or organisation, phone number and the content of your message.',
      'Information you share when you contact us directly by email, phone or WhatsApp, or when you engage us for advisory, coaching or leadership development work.',
      'Technical data such as your browser type, device type, approximate location and the pages you viewed, collected in aggregate through privacy-preserving web analytics.',
    ],
  },
  {
    heading: 'How we use your information',
    bullets: [
      'To respond to your enquiry and continue the conversation you started.',
      'To deliver and administer the services you have engaged us for.',
      'To send you occasional insights or newsletters where you have asked to receive them. You can stop these at any time.',
      'To understand, in aggregate, how the website is used so that we can improve it.',
      'To meet legal, accounting or regulatory obligations that apply to us.',
    ],
  },
  {
    heading: 'What we do not do',
    paragraphs: [
      'We do not sell, rent or trade your personal information. We do not share it with third parties for their own marketing. We do not use the information you send us for any purpose unrelated to the reason you sent it.',
    ],
  },
  {
    heading: 'Confidentiality of client information',
    paragraphs: [
      'Advisory and coaching engagements involve sensitive commercial and personal information. Everything discussed in an engagement is treated as confidential and is not disclosed outside the engagement without your consent, except where disclosure is required by law or where there is a risk of serious harm.',
    ],
  },
  {
    heading: 'Service providers',
    paragraphs: [
      'We rely on a small number of established service providers to run the website and our communications — for example website hosting, email and web analytics. These providers process data only on our instructions and only to the extent needed to provide their service.',
    ],
  },
  {
    heading: 'Cookies and analytics',
    paragraphs: [
      'The website uses a minimal set of cookies and similar technologies needed for the site to function and to measure aggregate traffic. Analytics data is not used to identify you individually. You can block or delete cookies through your browser settings; the site will continue to work.',
    ],
  },
  {
    heading: 'Data retention',
    paragraphs: [
      'We keep enquiry and engagement records for as long as needed for the purpose they were collected for, and thereafter only for as long as required to meet legal, tax or regulatory obligations. When information is no longer needed, it is deleted.',
    ],
  },
  {
    heading: 'Security',
    paragraphs: [
      'We apply reasonable technical and organisational safeguards to protect the information we hold. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we work to keep the risk low and to respond promptly if an issue arises.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You may ask us to confirm what personal information we hold about you, to correct it if it is inaccurate, to delete it, or to stop using it for a particular purpose such as marketing. Write to us at the address below and we will respond within a reasonable period.',
    ],
  },
  {
    heading: 'Children',
    paragraphs: [
      'Our services are intended for professional and organisational clients. The website is not directed at children, and we do not knowingly collect information from anyone under the age of 18.',
    ],
  },
  {
    heading: 'Links to other sites',
    paragraphs: [
      'This website links to external sites such as LinkedIn, news publications and podcast platforms. Those sites are governed by their own privacy policies, and we are not responsible for their content or practices.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The date at the top of this page always reflects the most recent version, and any material change will be reflected there.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      `If you have a question about this policy or about how your information is handled, write to ${ORGANISATION.email} or call ${ORGANISATION.telephone}. Insight Vector is based in ${ORGANISATION.city}, India.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: TITLE, path: '/privacy-policy' }]} />
      <LegalContent
        title={TITLE}
        updated="Last updated: 4 September 2026"
        intro="Insight Vector respects your privacy. This policy explains what information we collect through insightvector.in, why we collect it, and the choices you have."
        sections={sections}
      />
    </>
  )
}
