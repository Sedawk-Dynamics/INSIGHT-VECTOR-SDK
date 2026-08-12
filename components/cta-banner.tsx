'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * The closing call-to-action banner. Shared by the home page, Featured Insights
 * and Media & Gallery so the sign-off reads identically across the site.
 */
export default function CtaBanner({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`rounded-3xl bg-[#0C2298] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 ${className}`}
    >
      <div className="flex-1 text-center lg:text-left">
        <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3 text-balance">
          Navigate Complexity with Confidence.
        </h3>
        <p className="font-sans text-white/60 font-normal">
          Partner with Insight Vector to make better decisions at every critical juncture.
        </p>
      </div>
      <Link
        href="/#contact"
        className="shrink-0 px-10 py-4 bg-[#537AED] text-white font-semibold rounded-full hover:bg-white hover:text-[#0C2298] transition-all duration-300 shadow-lg"
      >
        Book a Conversation
      </Link>
    </motion.div>
  )
}
