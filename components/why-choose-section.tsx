'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Link2,
  Globe,
  UserCheck,
  Settings2,
  Rocket,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: BrainCircuit,
    title: 'Practitioner-Led Expertise',
    description:
      'Our advisory, coaching and leadership development are grounded in more than three decades of real-world leadership across global businesses, markets, Boards, strategy, growth, risk and transformation.',
  },
  {
    icon: Link2,
    title: 'Strategy, Growth & Risk — Connected',
    description:
      'We recognise that strategy, growth and risk cannot be managed in separate boxes. Our integrated perspective helps businesses pursue opportunity while strengthening resilience.',
  },
  {
    icon: Globe,
    title: 'Global Perspective. Business Relevance.',
    description:
      "The Founder's experience across multiple geographies and diverse markets brings a global perspective to strategy, international expansion, leadership and risk — always grounded in the client's business realities.",
  },
  {
    icon: UserCheck,
    title: 'C-Suite Experience in the Room',
    description:
      'Clients engage directly with senior-level experience, independent judgement and practical perspective. Every engagement is founder-led and personally anchored.',
  },
  {
    icon: Settings2,
    title: 'Personalised, Not Packaged',
    description:
      "We do not believe in one-size-fits-all solutions. Every engagement begins with the client's context, ambitions, challenges and critical decisions.",
  },
  {
    icon: Rocket,
    title: 'Coaching with Lived Leadership Perspective',
    description:
      'Our executive coaching combines professional coaching discipline with the lived experience of leading large businesses, multicultural teams and complex transformations.',
  },
  {
    icon: Lightbulb,
    title: 'Built for What Comes Next',
    description:
      'Our work addresses the forces reshaping business and leadership today — from Responsible AI and cyber resilience to ESG, sustainability, strategic risk and global disruption.',
  },
  {
    icon: ArrowRight,
    title: 'Insight That Moves to Action',
    description:
      'We do more than offer perspectives. We help businesses and leaders challenge assumptions, sharpen decisions and translate insight into meaningful action.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-4 block">
            Why Insight Vector
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-6 text-balance">
            Because Complex Challenges Need More Than Textbook Answers
          </h2>
        </motion.div>

        {/* Alternating timeline layout */}
        <div className="space-y-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex gap-6 items-start rounded-2xl p-6 lg:p-8 border transition-all duration-300 hover:border-[#537AED] hover:shadow-[0_8px_40px_rgba(83,122,237,0.10)] ${
                  i % 2 === 0 ? 'bg-white border-[#D0DAF8]' : 'bg-[#EEF2FF] border-[#D0DAF8]'
                }`}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center border border-[#D0DAF8] group-hover:bg-[#537AED] group-hover:border-[#537AED] transition-all duration-300">
                  <Icon size={20} className="text-[#0C2298] group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-[#0C2298] tracking-wider uppercase mb-1 block">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-xl lg:text-2xl text-[#0C2298] mb-2">{reason.title}</h3>
                    </div>
                  </div>
                  <p className="font-sans text-[#0C2298] leading-relaxed font-normal text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-[#0C2298] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3 text-balance">
              Navigate Complexity with Confidence.
            </h3>
            <p className="font-sans text-white/60 font-normal">
              Partner with Insight Vector to make better decisions at every critical juncture.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-10 py-4 bg-[#537AED] text-white font-semibold rounded-full hover:bg-white hover:text-[#0C2298] transition-all duration-300 shadow-lg"
          >
            Book a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
