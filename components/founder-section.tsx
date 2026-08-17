'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function FounderSection() {
  return (
    <section id="founder" className="pt-10 pb-8 lg:pt-12 lg:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight text-balance">
            Message from the Founder
          </h2>
        </motion.div>

        {/* Portrait is ordered to the right on large screens; it stays first on
            mobile so the reader meets the face before the long message. */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Message content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-6 pt-0 lg:pt-4 lg:order-1"
          >
            {/* items-start keeps the quote mark on the first line rather than
                floating to the vertical centre once the text wraps. */}
            <div className="flex items-start gap-3 mb-6">
              {/* Rotated so the glyph reads as an opening quote, not a closing one. */}
              <Quote
                size={24}
                className="text-[#0C2298] rotate-180 shrink-0 mt-1.5"
                aria-hidden="true"
              />
              <span className="font-serif text-2xl lg:text-3xl font-semibold text-[#0C2298] italic leading-snug">
                Insight matters. But what we do with it matters more.
              </span>
            </div>

            {[
              'Over three decades of leading businesses, diverse teams and transformation across global markets, I have learnt that the most consequential challenges rarely come with simple answers.',
              'Founders and business owners must grow without losing focus or discipline. Leaders taking on larger roles must shift from functional expertise to enterprise-wide leadership. Businesses expanding into new markets must balance opportunity with risk.',
              'In a world shaped by AI, cyber threats, sustainability pressures and constant disruption, risks can no longer be managed in isolation. I founded Insight Vector to help businesses and leaders navigate these moments with greater clarity, confidence and judgement.',
              'I bring to every engagement the perspective of a practitioner — as a former Managing Director and APAC business leader, Board Director, strategic advisor and executive coach. I have led businesses and multicultural teams across multiple countries, navigated growth and transformation, and worked through complex decisions where the stakes were high and the answers were rarely obvious.',
              'My approach combines strategic perspective with practical experience, independent challenge with trusted partnership, and ambition with disciplined execution. Whether the challenge is scaling a business, entering new markets, raising capital, navigating strategic risk or stepping into a larger leadership role, the purpose remains the same: to bring clarity to complexity and turn insight into meaningful action.',
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="font-sans text-[#0C2298] leading-relaxed font-normal"
              >
                {para}
              </motion.p>
            ))}

            {/* Signature block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 border-t border-[#D0DAF8] flex items-center gap-4"
            >
              <div>
                <p className="font-serif text-2xl text-[#0C2298]">Santanu Sengupta</p>
                <p className="text-sm text-[#0C2298] font-semibold font-sans">Founder &amp; CEO, Insight Vector</p>
              </div>
            </motion.div>
          </motion.div>
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(12,34,152,0.14)]">
              <Image
                src="/founder-portrait.jpg"
                alt="Santanu Sengupta, Founder of Insight Vector"
                width={480}
                height={600}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2298]/20 to-transparent" />
            </div>

            {/* Name badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-6 left-8 right-8 bg-white rounded-2xl shadow-[0_8px_40px_rgba(83,122,237,0.18)] border border-[#D0DAF8] p-5"
            >
              <p className="font-serif text-xl font-bold text-[#0C2298]">Santanu Sengupta</p>
              <p className="text-sm text-[#0C2298] font-bold font-sans">Founder, Insight Vector</p>
              <p className="text-sm text-[#0C2298] font-bold font-sans mt-1 leading-relaxed">
                Former MD, Wells Fargo Bank
                <br />
                Board Director
                <br />
                ICF Certified Executive Coach
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
