import type { Metadata } from 'next'
import LegalContent, { type LegalSection } from '@/components/legal-content'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { FOUNDER, OG_IMAGE, ORGANISATION } from '@/lib/site'

const TITLE = 'Disclaimer'
const DESCRIPTION =
  'The basis on which Insight Vector publishes content on insightvector.in, and the limits of what that content should be relied on for.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/disclaimer' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/disclaimer',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
}

const sections: readonly LegalSection[] = [
  {
    heading: 'General information only',
    paragraphs: [
      'The content on this website — including insights, articles, commentary, frameworks and media appearances — is published for general information and professional discussion. It is not advice directed at your particular circumstances, and it should not be treated as a substitute for a proper engagement.',
    ],
  },
  {
    heading: 'Not professional advice',
    paragraphs: [
      'Nothing on this website constitutes legal, financial, investment, tax, accounting, regulatory, medical or psychological advice. Before acting on anything you read here, take advice from a qualified professional who understands your specific situation.',
    ],
  },
  {
    heading: 'Coaching is not therapy',
    paragraphs: [
      'Executive coaching and mentoring are development conversations focused on professional performance, decision-making and leadership. They are not psychotherapy, counselling or a clinical intervention, and they are not a substitute for medical or mental health treatment.',
    ],
  },
  {
    heading: 'No guarantee of outcomes',
    paragraphs: [
      'Business, leadership and organisational outcomes depend on many factors outside our control, including market conditions, execution and the decisions of others. Descriptions of past work, client results or programme outcomes are illustrative and do not guarantee similar results in your context.',
    ],
  },
  {
    heading: 'Accuracy and currency',
    paragraphs: [
      'We take care to ensure the content is accurate at the time of publication, but business, regulatory and technology landscapes move quickly. Content is not routinely revised after publication, and we make no representation that it remains current, complete or free of error.',
    ],
  },
  {
    heading: 'Personal views',
    paragraphs: [
      `Commentary, interviews and opinion pieces reflect the personal and professional views of ${FOUNDER.name} at the time they were given. They do not represent the views of any employer, board, client or organisation they are or have been associated with.`,
    ],
  },
  {
    heading: 'Third-party content and media',
    paragraphs: [
      'This website references and links to third-party publications, broadcasts, podcasts and platforms. Third-party names, logos and marks belong to their respective owners, and their inclusion indicates coverage or participation, not endorsement. We are not responsible for the accuracy or availability of third-party content.',
    ],
  },
  {
    heading: 'No client relationship',
    paragraphs: [
      'Reading this website, downloading its content or sending an enquiry does not create a client, advisory or coaching relationship. Such a relationship arises only when scope, terms and fees are agreed in writing between you and Insight Vector.',
    ],
  },
  {
    heading: 'Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, Insight Vector accepts no liability for any loss or damage arising from reliance on the content of this website. Any reliance you place on it is strictly at your own risk.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      `If anything on this website appears inaccurate or out of date, please tell us at ${ORGANISATION.email} so that we can review it.`,
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: TITLE, path: '/disclaimer' }]} />
      <LegalContent
        title={TITLE}
        updated="Last updated: 4 September 2026"
        intro="Insight Vector publishes this website for general information and professional discussion. This page sets out the limits of what it should be relied on for."
        sections={sections}
      />
    </>
  )
}
