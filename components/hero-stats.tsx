'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Globe } from 'lucide-react'

type Stat = {
  /** Short headline figure. Kept to one or two words so it never wraps. */
  value: string
  label: string
  /** Optional supporting line, e.g. the founder's former role. */
  note?: string
  icon: typeof Award
}

// The figure and its unit are split so the eye lands on the number first and
// the long descriptive text lives in `label`, where wrapping is expected.
const stats: Stat[] = [
  { value: '30+ Years', label: 'Global Banking, Board & Strategic Advisory', icon: Award },
  { value: 'C-Suite', label: 'Experience', note: 'Former MD Wells Fargo Bank', icon: Briefcase },
  { value: '15 Countries', label: 'Global Leadership', icon: Globe },
]

/**
 * The three credibility boxes shown in the hero banner of every page.
 *
 * Laid out horizontally — icon chip on the left, text stacked beside it — so a
 * value or label of any length simply flows down its own column instead of
 * throwing the card's internal baselines out of step with its neighbours.
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
          className="group flex h-full items-start gap-3.5 rounded-2xl bg-white border border-[#D0DAF8] px-5 py-5 hover:border-[#537AED] hover:shadow-[0_8px_28px_rgba(83,122,237,0.12)] transition-all duration-300"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] group-hover:bg-[#537AED] transition-colors duration-300">
            <Icon
              size={18}
              className="text-[#0C2298] group-hover:text-white transition-colors duration-300"
            />
          </span>

          <div className="min-w-0">
            <p className="font-serif text-xl lg:text-2xl font-semibold text-[#0C2298] leading-tight">
              {value}
            </p>
            <p className="mt-1 font-sans text-base text-[#0C2298] leading-snug">{label}</p>
            {note && (
              <p className="mt-1.5 font-sans text-base font-semibold text-[#0C2298] leading-snug">
                {note}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
