'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroStats from '@/components/hero-stats'
import {
  TrendingUp,
  Globe,
  DollarSign,
  BarChart2,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const services = [
  {
    icon: TrendingUp,
    title: 'Business Strategy & Growth',
    description:
      'Craft robust growth strategies that align with your vision, market position, and competitive landscape — built for sustainable, long-term value creation.',
  },
  {
    icon: Globe,
    title: 'Scaling & International Expansion',
    description:
      'Navigate the complexities of scaling operations and entering new markets with a structured playbook grounded in global execution experience.',
  },
  {
    icon: DollarSign,
    title: 'Capital Strategy & Fundraising',
    description:
      'Define the right capital structure, identify the right investors, and lead compelling fundraising narratives that convert interest into commitment.',
  },
  {
    icon: BarChart2,
    title: 'Investor Readiness',
    description:
      'Position your business for institutional scrutiny — from financial modelling and due diligence preparation to board-ready governance frameworks.',
  },
  {
    icon: Shield,
    title: 'Governance & Institutionalisation',
    description:
      'Build the systems, structures and processes that transform an entrepreneurial venture into a resilient, scalable institution.',
  },
  {
    icon: Users,
    title: 'Board & Leadership Advisory',
    description:
      'Bring independent, experienced judgment to the boardroom and leadership team at pivotal moments of growth, transition and transformation.',
  },
]

const whoWeWorkWith = [
  'Founders',
  'Small & Medium Business Owners',
  'Growth-Stage Companies',
  'Family Businesses',
  'CEOs & Leadership Teams',
]

export default function StrategicAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] via-white to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center pb-16">
            {/* Left */}
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#537AED]/10 border border-[#537AED]/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#537AED]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0C2298]">
                  Strategic Advisory
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-serif text-5xl lg:text-6xl font-semibold text-[#0C2298] leading-[1.1] text-balance mb-6"
              >
                Scale with Clarity.{' '}
                <span className="text-[#0C2298]">Grow with Discipline.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-lg text-[#0C2298] leading-relaxed mb-8 text-pretty"
              >
                Growth creates opportunity. It also creates complexity. We help founders and business
                owners make better strategic decisions at every stage of growth — from scaling
                operations and entering new markets to raising capital, strengthening governance and
                building resilient businesses.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-base text-[#0C2298] leading-relaxed mb-10 text-pretty"
              >
                Grounded in over three decades of global leadership across banking, strategy, growth,
                risk and Board advisory, we bring an independent, institutional perspective to
                entrepreneurial ambition.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0C2298] text-white text-sm font-semibold rounded-full hover:bg-[#537AED] transition-all duration-300 shadow-md hover:shadow-[0_4px_20px_rgba(83,122,237,0.4)]"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0C2298] text-[#0C2298] text-sm font-semibold rounded-full hover:border-[#537AED] hover:text-[#0C2298] transition-all duration-300"
                >
                  All Services
                </Link>
              </motion.div>

              {/* Hero stat boxes */}
              <HeroStats className="mt-10 pt-8 border-t border-[#D0DAF8]" />
            </div>

            {/* Right — image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/strategy-session.png"
                  alt="Strategic advisory session"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2298]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Where We Add Value */}
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
              Our Expertise
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#0C2298]">
              Where We Add Value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="group bg-white rounded-2xl p-8 border border-[#E8EEFF] hover:border-[#537AED]/40 hover:shadow-[0_8px_32px_rgba(83,122,237,0.12)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#537AED]/10 flex items-center justify-center mb-5 group-hover:bg-[#537AED] transition-colors duration-300">
                  <service.icon
                    size={22}
                    className="text-[#0C2298] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0C2298] mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#0C2298] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Insight Vector Difference */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md">
                <Image
                  src="/founder-portrait.jpg"
                  alt="Santanu Sengupta — Founder, Insight Vector"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2298]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-white text-lg font-semibold">Santanu Sengupta</p>
                  <p className="text-[#A8C0FF] text-sm">Founder, Insight Vector</p>
                </div>
              </div>
            </motion.div>

            <div>
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
                className="text-base text-[#0C2298] leading-relaxed mb-5 text-pretty"
              >
                Our advice is shaped by experience, not theory. Our founder, Santanu Sengupta, has
                spent more than three decades leading businesses, strategy, risk and transformation
                across global financial institutions before advising founders and growth-stage
                companies on scaling, fundraising, governance and international expansion.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="text-base text-[#0C2298] leading-relaxed mb-8 text-pretty"
              >
                As President &amp; Chief Growth &amp; Strategy Officer at a leading cyber risk
                management start-up, he led client acquisition, business growth, international
                expansion and funding rounds, while helping drive engagement with regulators and
                Boards on data-driven Cyber Risk frameworks. This unique combination of corporate
                leadership, Board experience and startup execution enables us to help businesses
                scale with greater clarity, discipline and confidence.
              </motion.p>

              <motion.blockquote
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="border-l-4 border-[#537AED] pl-5 py-1"
              >
                <p className="font-serif text-xl text-[#0C2298] italic leading-relaxed">
                  &ldquo;Clarity in Complexity. Direction for What Comes Next.&rdquo;
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium tracking-wide text-[#0C2298]">
                  {['Strategy', 'Growth', 'Risk', 'Leadership'].map((pillar, i) => (
                    <span key={pillar} className="flex items-center gap-x-3">
                      {i > 0 && <span aria-hidden="true" className="text-[#0C2298]">|</span>}
                      {pillar}
                    </span>
                  ))}
                </p>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12 lg:py-16 bg-[#0C2298]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
                Who We Work With
              </h2>
              <p className="text-white text-base leading-relaxed mb-8 text-pretty">
                We partner with ambitious leaders and organisations at critical inflection points —
                where clarity of strategy and quality of advice can make all the difference.
              </p>
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
                    <CheckCircle2 size={20} className="text-[#A8C0FF] shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20"
            >
              <h3 className="font-serif text-3xl font-semibold text-white mb-4 text-balance">
                Better decisions build stronger businesses.
              </h3>
              <p className="text-white text-base leading-relaxed mb-2">
                Let&apos;s navigate your next stage of growth together.
              </p>
              {/* Kept on its own line so the tagline never breaks mid-sentence. */}
              <p className="text-white text-base leading-relaxed mb-8 lg:whitespace-nowrap">
                Clarity in Complexity. Direction for What Comes Next.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#537AED] text-white text-sm font-semibold rounded-full hover:bg-white hover:text-[#0C2298] transition-all duration-300 shadow-lg"
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
