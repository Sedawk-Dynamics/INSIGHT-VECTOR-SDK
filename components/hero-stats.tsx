'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Globe } from 'lucide-react'

type Stat = {
  value: string
  label: string
  /** Optional second line, e.g. the founder's former role. */
  note?: string
  icon: typeof Award
}

const stats: Stat[] = [
  { value: '30+ Years', label: 'Global Banking, Board & Strategic Advisory', icon: Award },
  { value: 'C-Suite', label: 'Experience', note: 'Former MD, Wells Fargo Bank', icon: Briefcase },
  { value: '15 Countries', label: 'Global Leadership', icon: Globe },
]

/**
 * The three credibility boxes shown in the hero banner of every page.
 */
export default function HeroStats({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${className}`}>
      {stats.map(({ value, label, note, icon: Icon }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col rounded-2xl bg-[#EEF2FF] border border-[#D0DAF8] px-5 py-4 hover:border-[#537AED] transition-colors duration-300"
        >
          {/* The value row is min-height'd for two lines and the icon is pinned to
              the first line, so all three boxes share the same internal baselines
              even though "30+ Years" wraps and "C-Suite" does not. */}
          <div className="flex items-start gap-2 mb-2 min-h-[3.75rem]">
            <Icon size={15} className="text-[#0C2298] shrink-0 mt-1.5" />
            <span className="text-2xl font-semibold text-[#0C2298] leading-tight">{value}</span>
          </div>
          <span className="text-base text-[#0C2298] font-medium tracking-wide leading-snug block">
            {label}
          </span>
          {note && (
            <span className="mt-1 block text-base text-[#0C2298] font-semibold leading-snug">
              {note}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
