'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroStats from '@/components/hero-stats'
import { ArrowRight, Brain, CheckCircle2, Leaf, ShieldAlert, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const capabilities = [
  {
    icon: Users,
    title: 'Leadership & Executive Effectiveness',
    description:
      'Strengthening strategic thinking, decision-making, stakeholder influence and the personal effectiveness of leaders at every level.',
  },
  {
    icon: ShieldAlert,
    title: 'Integrated Risk Management',
    description:
      'Connecting strategy, growth and risk so leaders can pursue opportunity while building genuine organisational resilience.',
  },
  {
    icon: Leaf,
    title: 'ESG & Sustainability',
    description:
      'Moving beyond reporting obligations to embed sustainability into strategy, governance and long-term value creation.',
  },
  {
    icon: Brain,
    title: 'Responsible AI',
    description:
      'Equipping boards, leaders and organisations to navigate AI governance, strategy and responsible deployment.',
  },
]

const whoWeWorkWith = [
  'Founders & Business Owners',
  'CXOs & Senior Leadership Teams',
  'High-Potential Leaders',
  'Organisations Building Leadership Capability',
]

export default function LeadershipDevelopmentContent() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-white to-white pt-28 lg:pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#537AED]/10 border border-[#537AED]/20"
              >
                <span className="w-2 h-2 rounded-full bg-[#537AED]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0C2298]">
                  Leadership Development for Organisations
                </span>
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-serif text-5xl lg:text-6xl font-semibold text-[#0C2298] leading-[1.1] text-balance mb-6"
              >
                Developing Leaders for a{' '}
                <span className="text-[#537AED]">More Complex World.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-lg text-[#0C2298] leading-relaxed mb-6 text-pretty"
              >
                Today&apos;s leaders face a very different business landscape. AI, cyber risk, ESG,
                geopolitical uncertainty and rising stakeholder expectations demand stronger
                judgement, better decision-making and more resilient leadership.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-base text-[#0C2298] leading-relaxed mb-10 text-pretty"
              >
                Insight Vector helps organisations develop future-ready leaders through practical,
                executive-level programmes grounded in over three decades of global leadership
                experience across strategy, risk, governance and Board advisory.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0C2298] text-white text-base font-semibold rounded-full hover:bg-[#537AED] transition-all duration-300 shadow-md hover:shadow-[0_4px_20px_rgba(83,122,237,0.4)]"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0C2298] text-[#0C2298] text-base font-semibold rounded-full hover:border-[#537AED] hover:text-[#537AED] transition-all duration-300"
                >
                  All Services
                </Link>
              </motion.div>

              <HeroStats className="mt-10 pt-8 border-t border-[#D0DAF8]" />
            </div>

            {/* Right — portrait */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/founder-portrait.jpg"
                  alt="Santanu Sengupta — Founder, Insight Vector"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2298]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Where We Build Capability */}
      <section className="py-12 lg:py-16 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight text-balance">
              Our Programmes
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#0C2298]">
              Where We Build Capability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="group bg-white rounded-2xl p-8 border border-[#E8EEFF] hover:border-[#537AED]/40 hover:shadow-[0_8px_32px_rgba(83,122,237,0.12)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#537AED]/10 flex items-center justify-center mb-5 group-hover:bg-[#537AED] transition-colors duration-300">
                  <item.icon
                    size={22}
                    className="text-[#537AED] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0C2298] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-[#0C2298] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-8 text-balance">
              Our Approach
            </h2>
            <p className="text-lg text-[#0C2298] leading-relaxed mb-5 text-pretty">
              Every programme is tailored to your organisation&apos;s strategic priorities, industry
              context and leadership challenges.
            </p>
            <p className="text-base text-[#0C2298] leading-relaxed mb-5 text-pretty">
              We combine practical experience with contemporary thinking to help leaders strengthen
              strategic thinking, decision-making, stakeholder influence and organisational
              resilience.
            </p>
            <p className="text-base text-[#0C2298] leading-relaxed text-pretty">
              Programmes are interactive, discussion-led and designed to deliver practical outcomes,
              not just theoretical knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Insight Vector Difference */}
      <section className="py-12 lg:py-16 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md lg:ml-auto">
                <Image
                  src="/founder-portrait.jpg"
                  alt="Santanu Sengupta — Founder, Insight Vector"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2298]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-sans text-white text-lg font-bold">Santanu Sengupta</p>
                  <p className="font-sans text-[#A8C0FF] text-lg font-medium">Founder, Insight Vector</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:order-1">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-6 text-balance">
              Our Edge
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#0C2298]">
              The Insight Vector Difference
            </p>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="text-lg text-[#0C2298] leading-relaxed mb-5 text-pretty"
              >
                Our programmes are shaped by experience, not theory.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="text-base text-[#0C2298] leading-relaxed mb-5 text-pretty"
              >
                Our founder Santanu Sengupta brings over three decades of global leadership across
                banking, strategy, growth, enterprise risk management and Board advisory, combined
                with contemporary expertise in AI governance, cyber resilience, ESG and Board
                advisory.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="text-base text-[#0C2298] leading-relaxed mb-8 text-pretty"
              >
                The result is learning that is practical, relevant and immediately applicable to
                today&apos;s business realities.
              </motion.p>

              <motion.blockquote
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                className="border-l-4 border-[#537AED] pl-5 py-1"
              >
                <p className="font-serif text-xl text-[#0C2298] italic leading-relaxed">
                  &ldquo;Clarity in Complexity. Direction for What Comes Next.&rdquo;
                </p>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12 lg:py-16 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-6 text-balance">
                Who We Work With
              </h2>
              <ul className="space-y-4">
                {whoWeWorkWith.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.5}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} className="text-[#537AED] shrink-0" />
                    <span className="text-[#0C2298] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-white rounded-3xl p-10 border border-[#D0DAF8] shadow-[0_8px_40px_rgba(83,122,237,0.10)]"
            >
              <h3 className="font-serif text-3xl font-semibold text-[#0C2298] mb-4 text-balance">
                Better Leaders. Stronger Organisations.
              </h3>
              <p className="text-[#0C2298] text-base leading-relaxed mb-3">
                Leadership capability is no longer a competitive advantage — it is a business
                imperative.
              </p>
              <p className="text-[#0C2298] text-base leading-relaxed mb-8">
                We help leaders and organisations build the judgement, capabilities and confidence
                to navigate growth, complexity and transformation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#537AED] text-white text-base font-semibold rounded-full hover:bg-[#0C2298] hover:text-white transition-all duration-300 shadow-lg"
              >
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
