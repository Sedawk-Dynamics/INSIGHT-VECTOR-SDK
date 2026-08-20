import type { Metadata } from 'next'
import LeadershipDevelopmentContent from '@/components/leadership-development-content'
import { BreadcrumbStructuredData, FaqStructuredData, type Faq } from '@/components/structured-data'
import { OG_IMAGE } from '@/lib/site'

const TITLE = 'Leadership Development Programmes & Corporate Workshops'
const DESCRIPTION =
  'High-impact leadership development programmes and workshops covering leadership and executive effectiveness, integrated risk management, ESG and sustainability, and responsible AI — tailored to your organisation’s strategic priorities.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/leadership-development' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/leadership-development',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION , images: [OG_IMAGE.url] },
}

const faqs: readonly Faq[] = [
  {
    question: 'What leadership development programmes does Insight Vector offer?',
    answer:
      'Insight Vector delivers programmes in four areas: leadership and executive effectiveness, integrated risk management, ESG and sustainability, and responsible AI.',
  },
  {
    question: 'Who are Insight Vector’s leadership programmes designed for?',
    answer:
      'They are designed for founders and business owners, CXOs and senior leadership teams, high-potential leaders, and organisations building leadership capability across their management layers.',
  },
  {
    question: 'Are the programmes tailored or off-the-shelf?',
    answer:
      'Every programme is tailored to the organisation’s strategic priorities, industry context and leadership challenges. Sessions are interactive and discussion-led, designed to deliver practical outcomes rather than theoretical knowledge.',
  },
  {
    question: 'Does Insight Vector run workshops on responsible AI and ESG?',
    answer:
      'Yes. Responsible AI and ESG and sustainability are two of the four core programme areas, combining contemporary thinking on AI governance, cyber resilience and ESG with practical business and board realities.',
  },
]

export default function LeadershipDevelopmentPage() {
  return (
    <>
      <BreadcrumbStructuredData
        trail={[{ name: 'Leadership Development', path: '/leadership-development' }]}
      />
      <FaqStructuredData faqs={faqs} />
      <LeadershipDevelopmentContent />
    </>
  )
}
