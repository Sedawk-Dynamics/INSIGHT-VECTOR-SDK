import type { Metadata } from 'next'
import { FaqStructuredData, type Faq } from '@/components/structured-data'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ValuesSection from '@/components/values-section'
import FounderSection from '@/components/founder-section'
import WhyChooseSection from '@/components/why-choose-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  // The root layout already supplies the default title; the home page only
  // needs its own canonical so the domain root resolves cleanly.
  alternates: { canonical: '/' },
}

// Brand-level questions an answer engine is most likely to be asked about the
// firm. Each answer stands alone and names the entity explicitly, since a
// quoted fragment carries no surrounding context.
const faqs: readonly Faq[] = [
  {
    question: 'What is Insight Vector?',
    answer:
      'Insight Vector is a founder-led strategic advisory, executive coaching and leadership development firm. It helps founders, business owners, CXOs and senior leaders navigate complexity, accelerate growth and build future-ready organisations.',
  },
  {
    question: 'Who is the founder of Insight Vector?',
    answer:
      'Insight Vector was founded by Santanu Sengupta, a global business leader, Board Director, strategic advisor and ICF-credentialed Executive Coach. He brings over three decades of leadership experience across banking, strategy, growth, risk and transformation, including a former Managing Director and Asia Pacific South role at Wells Fargo Bank.',
  },
  {
    question: 'What services does Insight Vector offer?',
    answer:
      'Insight Vector offers three core services: strategic advisory for founders and growth-stage companies, executive coaching and mentoring for CXOs and senior leaders, and leadership development programmes and workshops for organisations.',
  },
  {
    question: 'Where is Insight Vector based?',
    answer:
      'Insight Vector is based in Mumbai, India, and works with clients globally. The founder’s experience spans leadership roles across 15 countries.',
  },
  {
    question: 'What makes Insight Vector different from other consultancies?',
    answer:
      'Every engagement is founder-led, so clients work directly with senior-level experience rather than a delegated team. Insight Vector also treats strategy, growth and risk as connected rather than separate disciplines, and its advice is grounded in three decades of operating experience rather than framework theory.',
  },
  {
    question: 'How can I contact Insight Vector?',
    answer:
      'You can reach Insight Vector by email at info@insightvector.com, by phone or WhatsApp on +91 9136110496, or through the contact form on insightvector.in.',
  },
]

export default function Home() {
  return (  

    <main className="bg-white">
      <FaqStructuredData faqs={faqs} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <FounderSection />
      <WhyChooseSection />
      {/* Featured Insights is intentionally not rendered.
          The section component still lives at components/insights-section.tsx. */}
      <ContactSection />
      <Footer />
    </main>
  )
}
