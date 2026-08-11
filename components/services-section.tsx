'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'strategic-advisory',
    number: '01',
    icon: TrendingUp,
    title: 'Strategic Advisory',
    tagline: 'Turning ambition into sustainable growth.',
    description:
      'We help founders and SMB owners sharpen strategic priorities, scale with discipline, strengthen resilience and prepare for the next stage of growth. Our advisory spans business strategy, international expansion, capital strategy, fundraising and integrated risk management.',
    tags: ['Growth & Scaling', 'Capital Strategy', 'Fundraising', 'Risk Management', 'International Expansion'],
  },
  {
    id: 'executive-coaching',
    number: '02',
    icon: Users,
    title: 'Executive Coaching & Mentoring',
    tagline: 'Leadership that creates enterprise-wide impact.',
    description:
      'We partner with founders, CXOs and senior leaders navigating expanded mandates, leadership transitions and strategic inflection points. Our approach combines coaching discipline with the lived perspective of a former C-suite leader — reflective yet outcome-focused.',
    tags: ['Leadership Transitions', 'Executive Presence', 'Stakeholder Influence', 'Decision Making', 'Board Readiness'],
  },
  {
    id: 'leadership-development',
    number: '03',
    icon: BookOpen,
    title: 'Leadership Development',
    tagline: 'Building capability for a rapidly changing world.',
    description:
      'We deliver high-impact training, workshops and leadership programmes connecting emerging ideas with business realities. Our programmes help leaders and organisations build the capabilities, judgement and resilience needed for tomorrow.',
    tags: ['Leadership', 'Integrated Risk', 'ESG & Sustainability', 'Responsible AI', 'Workshops'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          {/* Same 60px serif treatment as "Built on a Simple Belief". */}
          <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-6 text-balance">
            Our Core Services
          </h2>
          <p className="font-sans text-lg text-[#0C2298] leading-relaxed font-normal">
            Strategy, growth and risk cannot be managed in separate boxes. Our integrated perspective
            helps businesses pursue opportunity while building resilience.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl border border-[#D0DAF8] p-8 hover:border-[#537AED] hover:shadow-[0_16px_60px_rgba(83,122,237,0.15)] transition-all duration-400 flex flex-col"
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-5xl text-[#EEF2FF] font-semibold select-none">
                    {service.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center group-hover:bg-[#537AED] transition-colors duration-300">
                    <Icon size={22} className="text-[#0C2298] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content — min-heights keep the title, tagline and body starting
                    on the same baseline in all three cards regardless of length. */}
                <h3 className="font-serif text-3xl font-bold text-[#0C2298] mb-3 leading-snug min-h-[5rem]">
                  {service.title}
                </h3>
                <p className="text-base font-semibold text-[#0C2298] mb-4 italic font-sans min-h-[3rem]">
                  {service.tagline}
                </p>
                {/* flex-1 absorbs the spare height, pushing the tag block to a
                    consistent foot across all three cards. */}
                <p className="text-base text-[#0C2298] leading-relaxed font-sans font-medium mb-6 flex-1">
                  {service.description}
                </p>

                {/* Tags — min-height is sized for the longest list (five rows) so
                    every card's tags start on the same line and "Learn More"
                    sits at the same baseline. */}
                <div className="flex flex-wrap gap-2 mb-6 min-h-[12rem] content-start">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#EEF2FF] text-[#0C2298] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link — each card opens its own service page */}
                <Link
                  href={`/${service.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#0C2298] hover:text-[#537AED] transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform duration-200"
                  />
                </Link>

                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none ring-1 ring-[#537AED]/30" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
