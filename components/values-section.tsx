'use client'

import { motion } from 'framer-motion'
import { Focus, Shield, Heart, Zap, Flame, Telescope, Users } from 'lucide-react'

const values = [
  {
    icon: Focus,
    title: 'Clarity',
    description: 'We simplify complexity, sharpen priorities and focus on what matters most.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We bring independence of thought, candour and sound judgement to every engagement.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'We build enduring relationships through confidentiality, respect and genuine partnership.',
  },
  {
    icon: Zap,
    title: 'Impact',
    description: "We focus on meaningful outcomes — not activity for its own sake.",
  },
  {
    icon: Flame,
    title: 'Courage',
    description: 'We ask difficult questions, challenge assumptions and engage with the issues that others may avoid.',
  },
  {
    icon: Telescope,
    title: 'Future Readiness',
    description: 'We help businesses and leaders anticipate change, manage interconnected risks and prepare for what comes next.',
  },
  {
    icon: Users,
    title: 'Humanity',
    description: 'We believe sustainable performance begins with people, purpose and responsible leadership.',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-4 block">
            Our Values
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight text-balance">
            What We Stand For
          </h2>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-2xl p-7 border border-[#D0DAF8] hover:border-[#537AED] hover:shadow-[0_12px_40px_rgba(83,122,237,0.15)] transition-all duration-300 cursor-default"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-[#537AED]/20 pointer-events-none" />

                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5 group-hover:bg-[#537AED] transition-colors duration-300">
                  <Icon size={20} className="text-[#0C2298] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-xl text-[#0C2298] mb-2">{value.title}</h3>
                <p className="font-sans text-sm text-[#0C2298] leading-relaxed font-normal">
                  {value.description}
                </p>
              </motion.div>
            )
          })}

          {/* Wide CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-[#0C2298] rounded-2xl p-7 flex flex-col justify-between sm:col-span-2 lg:col-span-1"
          >
            <p className="font-serif text-2xl text-white leading-snug mb-6">
              Values are not words on a wall — they are the principles that guide every engagement.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
            >
              Partner with Us →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
