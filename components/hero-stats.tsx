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
  { value: 'C-Suite', label: 'Experience', note: 'Former MD Wells Fargo Bank', icon: Briefcase },
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
          className="flex h-full flex-col rounded-2xl bg-[#EEF2FF] border border-[#D0DAF8] px-5 py-5 hover:border-[#537AED] transition-colors duration-300"
        >
          {/* The icon sits on its own row rather than inline with the value, so a
              value that wraps ("30+ Years") keeps every line flush to the same
              left margin instead of indenting under the icon. The value block is
              min-height'd for two lines so all three labels start level. */}
          <Icon size={16} className="text-[#0C2298] shrink-0 mb-2" />
          <span className="block min-h-[3.5rem] text-2xl font-semibold text-[#0C2298] leading-tight">
            {value}
          </span>
          <span className="block text-base text-[#0C2298] font-medium leading-snug">{label}</span>
          {/* mt-auto drops the note to the card foot, level across the row. */}
          {note && (
            <span className="mt-auto pt-2 block text-base text-[#0C2298] font-semibold leading-snug">
              {note}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
