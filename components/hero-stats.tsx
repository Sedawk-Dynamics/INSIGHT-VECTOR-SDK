'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Globe } from 'lucide-react'

type Stat = {
  value: string
  label: string
  /** Optional supporting line, e.g. the founder's former role. */
  note?: string
  icon: typeof Award
}

const stats: Stat[] = [
  { value: '30+ Years', label: 'Global Banking, Board & Strategic Advisory', icon: Award },
  { value: 'C-Suite', label: 'Experience', note: 'Former MD Wells Fargo Bank', icon: Briefcase },
  { value: '15 Countries', label: 'Global Leadership', icon: Globe },
]

/**
 * The three credibility stats shown in the hero banner of every page.
 *
 * Stacked as full-width rows rather than three side-by-side cards. The hero
 * splits the viewport in half, so a three-column grid left each card barely
 * 170px wide and every value and label wrapped onto three or four lines. As
 * rows each stat gets the full column width, fits on one line, and the icons,
 * values and labels line up on shared vertical edges.
 */
export default function HeroStats({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#D0DAF8] bg-white divide-y divide-[#D0DAF8] ${className}`}
    >
      {stats.map(({ value, label, note, icon: Icon }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-center gap-4 px-5 py-4 hover:bg-[#EEF2FF]/60 transition-colors duration-300"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] group-hover:bg-[#537AED] transition-colors duration-300">
            <Icon
              size={19}
              className="text-[#0C2298] group-hover:text-white transition-colors duration-300"
            />
          </span>

          <div className="min-w-0">
            <p className="font-sans text-lg font-semibold text-[#0C2298] leading-tight">{value}</p>
            <p className="font-sans text-base text-[#0C2298] leading-snug">
              {label}
              {note && <span className="font-semibold">{` — ${note}`}</span>}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
