'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Split layout: copy on the left, image on the right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Heading and its kicker are grouped so the section's space-y rhythm
                treats them as one block instead of spacing them apart. The kicker
                must be a block for its top margin to take effect. */}
            <div>
              <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight text-balance">
                About Insight Vector
              </h2>
              <span className="block mt-3 text-xs font-semibold text-[#0C2298] tracking-widest uppercase">
                Built on a Simple Belief
              </span>
            </div>

            {/* Animated quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-6 border-l-4 border-[#537AED] bg-[#EEF2FF] rounded-r-2xl py-5 pr-6"
            >
              {/* Rotated so the glyph reads as an opening quote, not a closing one. */}
              <Quote size={20} className="text-[#0C2298] mb-2 rotate-180" aria-hidden="true" />
              <p className="font-serif text-xl lg:text-2xl text-[#0C2298] italic leading-snug">
                &ldquo;Better decisions begin with sharper insight, and create stronger outcomes.&rdquo;
              </p>
            </motion.blockquote>

            <p className="font-sans text-[#0C2298] leading-relaxed font-normal text-lg">
              Founded by Santanu Sengupta, a global business leader, Board Director, strategic advisor
              and ICF-credentialed Executive Coach, Insight Vector brings together over three decades
              of leadership experience across businesses, markets, cultures and transformation journeys.
            </p>

            <p className="font-sans text-[#0C2298] leading-relaxed font-normal">
              We work across three core areas: strategic advisory, executive coaching and mentoring, and
              leadership development. Across all three, our approach is practical, personalised and
              grounded in real-world experience.
            </p>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(12,34,152,0.12)]">
              <Image
                src="/strategy-session.png"
                alt="Strategic advisory session at Insight Vector"
                width={600}
                height={480}
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C2298]/15 to-transparent" />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl bg-[#537AED] opacity-10 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#0C2298] opacity-5 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
