'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CtaBanner from '@/components/cta-banner'

type Insight = {
  title: string
  excerpt: string
  date: string
  image?: string
  href: string
}

const NEWSLETTER_URL =
  'https://www.linkedin.com/newsletters/boardroom-beyond-7334260123055321088/'

/**
 * Posts are listed in the same order as the source page. Dates are decoded from
 * each LinkedIn post id (the leading 41 bits are the publish timestamp) and
 * cross-checked against the timestamp in the post's own image URL.
 */
const insights: Insight[] = [
  {
    title: "Moderating a distinguished panel on the RBI's FREE-AI Report",
    excerpt:
      "Part of the discussion on 'AI in Finance & India's Monetary Policy Framework' at the IMC Chamber of Commerce and Industry, exploring the Framework for Responsible and Ethical Enablement of AI in Financial Services.",
    date: '17 October 2025',
    image: '/insights/1.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7384830349182226432/',
  },
  {
    title: 'Why ESG disclosures deserve the same rigour as financial reports',
    excerpt:
      'As boardrooms double down on purpose and performance, ESG can no longer be a checkbox. It must be auditable, decision-useful, and held to the same standards as financial reporting.',
    date: '27 June 2025',
    image: '/insights/2.png',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7344445973743448064/',
  },
  {
    title:
      'A bank executive transferred ₹1.08 crore to fraudsters. He thought he was on a video call with his CEO.',
    excerpt:
      "It was a deepfake. AI-driven cyberattacks are projected to cost India's financial sector over ₹20,000 crore in 2025 — deepfake impersonation, synthetic identity fraud and AI-powered phishing.",
    date: '17 December 2025',
    image: '/insights/3.png',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7407100672267104256/',
  },
  {
    title: 'Most boards separate strategy from risk',
    excerpt:
      'Strategy gets built in boardrooms. Risk gets reviewed in audit committees. The two rarely intersect until something goes wrong. Organisations that embed enterprise risk management into strategic planning move faster, not slower.',
    date: '8 January 2026',
    image: '/insights/enterprise-risk-strategy-table.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7414868319561945088/',
  },
  {
    title: 'Every crisis I navigated over 30 years in global banking tested something different',
    excerpt:
      'Except for one quality — that one was never up for negotiation. Singapore instilled the discipline of precision and efficiency. London made clear that markets are shaped as much by judgement as by data.',
    date: '4 April 2026',
    image: '/insights/5.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7446177977857642496/',
  },
  {
    title: "India's Digital Personal Data Protection Rules: five implications for directors",
    excerpt:
      "Notified on 14 November 2025, this isn't just a compliance issue. It is a strategic governance imperative that boards can no longer afford to defer.",
    date: '27 November 2025',
    image: '/insights/6.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7399650055365918721/',
  },
  {
    title: 'Trophy boards, not working boards',
    excerpt:
      'Founders often reach out saying: "We\'d love your name on our pitch deck." Not: "We need strategic guidance on governance." And I understand the pressure they are under.',
    date: '15 October 2025',
    image: '/insights/7.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7384062728111276032/',
  },
  {
    title: 'The night I had to make a career-defining decision — and what followed',
    excerpt:
      'It was well past midnight in Singapore. After decades in global banking, leading across 15 markets, building resilient teams and navigating disruption, I found myself at a crossroads.',
    date: '24 June 2025',
    image: '/insights/8.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7343112714484965376/',
  },
  {
    title: 'In leadership, there are moments that test your character',
    excerpt:
      '2020 was one of those moments. As Managing Director and Regional Head for Asia Pacific South at a global bank, I was leading high-performing teams across multiple markets. Then came the unexpected.',
    date: '13 May 2025',
    image: '/insights/9.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7327907578506559488/',
  },
  {
    title: 'From banking to cyber battlegrounds: why I chose to pivot',
    excerpt:
      'After nearly three decades in global banking — leading teams and businesses, driving strategy, managing risk across borders — I did something unexpected. I pivoted to cyber risk management.',
    date: '14 May 2025',
    image: '/insights/10.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7328495998878507008/',
  },
  {
    title: "India's startup ecosystem is maturing. Its governance culture hasn't caught up yet.",
    excerpt:
      'Valuations are rising and institutional capital is flowing. Founders are building category-defining companies across fintech, deeptech and climate tech. But governance has not kept pace.',
    date: '11 April 2026',
    image: '/insights/11.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7448603446947110912/',
  },
  {
    title: 'Authority was structural. Then I stepped into board and advisory work.',
    excerpt:
      'For most of my career, walking into a room carried a certain weight — MD, APAC South Head, Wells Fargo Bank. The title preceded the conversation. Board work is a different leverage entirely.',
    date: '21 April 2026',
    image: '/insights/12.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7452343064146239489/',
  },
  {
    title: "AI's role in ESG, featured in Director Today",
    excerpt:
      'Featured in the November edition of Director Today, the monthly journal of the Institute of Directors (IOD), India. AI is transforming ESG from a compliance checkbox into a strategic boardroom tool.',
    date: '13 November 2025',
    image: '/insights/ai-esg-director-today.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7394576132072947712/',
  },
  {
    title: 'Cyber risk is no longer a back office concern',
    excerpt:
      'It is a boardroom agenda that shapes resilience, trust and long-term growth. The real question: are today\'s boards ready to lead this shift?',
    date: '11 September 2025',
    image: '/insights/14.png',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7371886216083845120/',
  },
  {
    title: "Most startups don't fail because of bad ideas. They fail because of weak governance.",
    excerpt:
      'Founders build brilliant products but often lack the governance frameworks to scale sustainably. That is where board-level mentoring changes everything.',
    date: '9 December 2025',
    image: '/insights/15.jpg',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7403999389205213184/',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturedInsightsContent() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Page heading / intro */}
      <section className="pt-32 lg:pt-40 pb-14 bg-gradient-to-b from-[#EEF2FF] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* <span className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-4 block">
              Featured Insights
            </span> */}
            <h1 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-5 text-balance">
              Featured Insights
            </h1>
           
          </motion.div>
        </div>
      </section>

      {/* Articles & Blogs — the newsletter, rebuilt in our own design language */}
      {/* <section className="pb-12 lg:pb-16 bg-white" aria-labelledby="articles-blogs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            id="articles-blogs"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Articles &amp; Blogs
          </motion.h2>

          <motion.a
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group grid md:grid-cols-3 gap-0 overflow-hidden rounded-3xl border border-[#D0DAF8] bg-white hover:border-[#537AED] hover:shadow-[0_16px_60px_rgba(83,122,237,0.15)] transition-all duration-300"
          >
          <span className="relative block aspect-video md:aspect-auto md:min-h-[15rem] bg-[#EEF2FF] overflow-hidden">
  <Image
    src="/newsletter.jpeg"
    alt="Boardroom & Beyond newsletter cover"
    fill
    sizes="(min-width: 768px) 33vw, 100vw"
    className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
  />
</span>

            <span className="md:col-span-2 flex flex-col p-8 lg:p-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0C2298] mb-3">
                Newsletter
              </span>
              <span className="font-serif text-3xl lg:text-4xl text-[#0C2298] leading-snug mb-3">
                Boardroom &amp; Beyond
              </span>
              <span className="font-sans text-base text-[#0C2298] leading-relaxed mb-6">
                The Strategic Edge: Boardroom &amp; Beyond — trusted perspectives at the intersection
                of leadership, risk and transformation.
              </span>

              <span className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-base text-[#0C2298]">
                <span className="inline-flex items-center gap-2">
                  <Users size={16} className="text-[#537AED]" />
                  1,503 subscribers
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#537AED]" />
                  Published monthly
                </span>
              </span>

              <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-[#0C2298] group-hover:text-[#537AED] transition-colors duration-200">
                By Santanu Sengupta
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </span>
          </motion.a>
        </div>
      </section> */}

       <section className="pb-12 lg:pb-16 bg-white" aria-labelledby="articles-blogs">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.h2
      id="articles-blogs"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
    >
      Articles &amp; Blogs
    </motion.h2>

    <motion.a
      href={NEWSLETTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group grid md:grid-cols-3 gap-0 overflow-hidden rounded-3xl border border-[#D0DAF8] bg-white hover:border-[#537AED] hover:shadow-[0_16px_60px_rgba(83,122,237,0.15)] transition-all duration-300"
    >
      <span className="relative block aspect-video md:aspect-auto md:min-h-[15rem] bg-[#EEF2FF] overflow-hidden">
        <Image
          src="/newsletter.jpeg"
          alt="Boardroom & Beyond newsletter cover"
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </span>

      <span className="md:col-span-2 flex flex-col p-8 lg:p-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#0C2298] mb-3">
          Newsletter
        </span>

        {/* <span className="font-serif text-3xl lg:text-4xl text-[#0C2298] leading-snug mb-4">
          Boardroom &amp; Beyond
        </span> */}

        <span className="font-sans text-base text-[#0C2298] leading-relaxed mb-6">
          A thought leadership newsletter by Santanu Sengupta, offering sharp
          perspectives on strategy, governance, risk and leadership in an
          increasingly complex world. Designed for board members, founders and
          senior leaders, each issue brings structured thinking, real-world
          experience and actionable insights to navigate uncertainty with
          confidence.
        </span>

        <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-[#0C2298] group-hover:text-[#537AED] transition-colors duration-200">
          Subscribe to Newsletter
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </span>
    </motion.a>
  </div>
</section>


      {/* Newsletter */}
      {/* <section className="py-12 lg:py-16 bg-[#EEF2FF]" aria-labelledby="newsletter">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              id="newsletter"
              className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-5 text-balance"
            >
              Newsletter
            </h2>
            <p className="font-sans text-lg text-[#0C2298] leading-relaxed mb-4 text-pretty">
              A thought leadership newsletter by Santanu Sengupta, offering sharp perspectives on
              strategy, governance, risk and leadership in an increasingly complex world.
            </p>
            <p className="font-sans text-base text-[#0C2298] leading-relaxed mb-8 text-pretty">
              Designed for board members, founders and senior leaders, each issue brings structured
              thinking, real-world experience and actionable insights to navigate uncertainty with
              confidence.
            </p>
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C2298] text-white font-semibold rounded-full hover:bg-[#537AED] transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(83,122,237,0.35)]"
            >
              <Mail size={16} />
              Subscribe to Newsletter
            </a>
          </motion.div>
        </div>
      </section> */}

      {/* LinkedIn Articles */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="linkedin-articles">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            id="linkedin-articles"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            LinkedIn Articles
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <motion.article
                key={item.href}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D0DAF8] bg-white hover:border-[#537AED] hover:shadow-[0_12px_50px_rgba(83,122,237,0.18)] transition-all duration-300 focus-within:border-[#537AED] focus-within:shadow-[0_12px_50px_rgba(83,122,237,0.18)]"
              >
                <span className="relative block w-full aspect-video overflow-hidden bg-[#EEF2FF]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      /* contain, not cover: these posts mix wide article covers with
                         portrait photos, and cropping would cut off the artwork text. */
                      className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-[#0C2298] px-6 text-center">
                      <span className="font-serif text-2xl text-white leading-snug">
                        Boardroom &amp; Beyond
                      </span>
                    </span>
                  )}
                </span>

                <div className="flex flex-1 flex-col p-5 border-t border-[#D0DAF8]">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0C2298] mb-2">
                    <CalendarDays size={13} className="text-[#537AED]" />
                    {item.date}
                  </p>

                  <h3 className="font-serif text-xl text-[#0C2298] leading-snug mb-2">
                    {/* The ::after overlay stretches this link across the whole card,
                        so the image, title and "Read on LinkedIn" are all clickable
                        while the card still exposes a single link to assistive tech. */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:decoration-[#537AED] focus-visible:decoration-2 focus-visible:underline-offset-4"
                    >
                      {item.title}
                    </a>
                  </h3>

                  <p className="font-sans text-base text-[#0C2298] leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  <span
                    aria-hidden="true"
                    className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-[#0C2298] group-hover:text-[#537AED] transition-colors duration-200"
                  >
                    Read on LinkedIn
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CtaBanner />
        </div>
      </section>

      <Footer />
    </div>
  )
}
