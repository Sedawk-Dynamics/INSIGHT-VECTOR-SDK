'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Globe } from 'lucide-react'

const stats = [
  { value: '30+', label: 'Years of Global Leadership', icon: Award },
  { value: 'C-Suite', label: 'Experience', icon: Briefcase },
  { value: '15+', label: 'Countries', icon: Globe },
]

/**
 * The three credibility boxes shown in the hero banner of every page.
 */
export default function HeroStats({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${className}`}>
      {stats.map(({ value, label, icon: Icon }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl bg-[#EEF2FF] border border-[#D0DAF8] px-5 py-4 hover:border-[#537AED] transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon size={15} className="text-[#0C2298] shrink-0" />
            <span className="text-2xl font-semibold text-[#0C2298] leading-none">{value}</span>
          </div>
          <span className="text-base text-[#0C2298] font-medium tracking-wide leading-snug block">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
