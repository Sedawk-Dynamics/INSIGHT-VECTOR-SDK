import type { Metadata } from 'next'
import StrategicAdvisoryContent from '@/components/strategic-advisory-content'
import { BreadcrumbStructuredData, FaqStructuredData, type Faq } from '@/components/structured-data'
import { OG_IMAGE } from '@/lib/site'

const TITLE = 'Strategic Advisory for Founders & Growth-Stage Companies'
const DESCRIPTION =
  'Strategic advisory for founders and business owners: business strategy and growth, scaling and international expansion, capital strategy and fundraising, investor readiness, governance and integrated risk management.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/strategic-advisory' },
  openGraph: {
    title: `${TITLE} | Insight Vector`,
    description: DESCRIPTION,
    type: 'website',
    images: [OG_IMAGE],
    url: '/strategic-advisory',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION , images: [OG_IMAGE.url] },
}

// Answers are self-contained so an answer engine can quote one without needing
// the surrounding page. Each is drawn from the copy on this page.
const faqs: readonly Faq[] = [
  {
    question: 'What does Insight Vector’s strategic advisory cover?',
    answer:
      'Insight Vector’s strategic advisory covers six areas: business strategy and growth, scaling and international expansion, capital strategy and fundraising, investor readiness, governance and institutionalisation, and board and leadership advisory.',
  },
  {
    question: 'Who does Insight Vector provide strategic advisory to?',
    answer:
      'Insight Vector works with founders, small and medium business owners, growth-stage companies, family businesses, and CEOs and leadership teams — typically at critical inflection points where clarity of strategy and quality of advice make the difference.',
  },
  {
    question: 'What makes Insight Vector’s strategic advisory different?',
    answer:
      'The advice is shaped by experience rather than theory. Founder Santanu Sengupta spent more than three decades leading businesses, strategy, risk and transformation across global financial institutions, and later served as President and Chief Growth & Strategy Officer at a cyber risk management start-up, before advising founders and growth-stage companies.',
  },
  {
    question: 'Does Insight Vector help with fundraising and investor readiness?',
    answer:
      'Yes. Insight Vector helps define the right capital structure, identify the right investors and lead fundraising narratives, and prepares businesses for institutional scrutiny through financial modelling, due diligence preparation and board-ready governance frameworks.',
  },
]

export default function StrategicAdvisoryPage() {
  return (
    <>
      <BreadcrumbStructuredData trail={[{ name: 'Strategic Advisory', path: '/strategic-advisory' }]} />
      <FaqStructuredData faqs={faqs} />
      <StrategicAdvisoryContent />
    </>
  )
}
