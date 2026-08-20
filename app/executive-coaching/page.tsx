import type { Metadata } from 'next'
import ExecutiveCoachingContent from '@/components/executive-coaching-content'
import { BreadcrumbStructuredData, FaqStructuredData, type Faq } from '@/components/structured-data'
import { OG_IMAGE } from '@/lib/site'

const TITLE = 'Executive Coaching & Mentoring for Founders, CXOs & Senior Leaders'
const DESCRIPTION =
  'ICF-credentialed executive coaching for founders, CXOs, senior executives and aspiring Board Directors — leadership transitions, executive presence, stakeholder influence, board readiness and decision-making under complexity.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/executive-coaching' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/executive-coaching',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION , images: [OG_IMAGE.url] },
}

const faqs: readonly Faq[] = [
  {
    question: 'Who does Insight Vector provide executive coaching to?',
    answer:
      'Insight Vector coaches founders and business owners, CXOs and senior executives, functional leaders, high-potential leaders and aspiring Board Directors — typically those navigating expanded mandates, leadership transitions or strategic inflection points.',
  },
  {
    question: 'What does executive coaching at Insight Vector cover?',
    answer:
      'Coaching covers leadership transitions and expanded mandates, executive presence and stakeholder influence, founder and CXO coaching, board readiness and director effectiveness, and leading teams through change, ambiguity and complexity.',
  },
  {
    question: 'Is executive coaching confidential?',
    answer:
      'Yes. Every coaching engagement at Insight Vector is confidential, personalised and outcome-focused, offering a private thinking partner for leaders who carry the weight of the final decision.',
  },
  {
    question: 'How does Insight Vector’s coaching approach differ from other executive coaching?',
    answer:
      'It combines professional coaching discipline with the lived perspective of a former C-suite leader. Founder Santanu Sengupta is an ICF-credentialed Executive Coach and a former Managing Director and APAC South leader at Wells Fargo Bank, so the coaching is reflective yet grounded in having led large businesses and multicultural teams.',
  },
]

export default function ExecutiveCoachingPage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: 'Executive Coaching', path: '/executive-coaching' }]} />
      <FaqStructuredData faqs={faqs} />
      <ExecutiveCoachingContent />
    </>
  )
}
