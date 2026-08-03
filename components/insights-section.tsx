'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

const insights = [
  {
    category: 'Responsible AI',
    title: 'Board Leadership in the Age of AI: Governance, Risk and Accountability',
    excerpt:
      'As AI reshapes every industry, boards must move beyond passive oversight. This article explores what genuine AI governance looks like for boards in 2025 and beyond.',
    date: 'June 2025',
    readTime: '8 min read',
    color: 'bg-[#0C2298]',
    textColor: 'text-white',
  },
  {
    category: 'Business Growth',
    title: 'Scaling with Discipline: Why Most Growth Strategies Fail Founders',
    excerpt:
      'Unchecked growth without strategic discipline is one of the leading causes of founder-led business failure. Here is how to grow with clarity and resilience.',
    date: 'May 2025',
    readTime: '6 min read',
    color: 'bg-[#EEF2FF]',
    textColor: 'text-[#0C2298]',
  },
  {
    category: 'Leadership',
    title: 'From Functional Expert to Enterprise Leader: Making the Critical Shift',
    excerpt:
      'The transition from functional mastery to enterprise-wide leadership is one of the most challenging inflection points for senior executives. What does it really take?',
    date: 'April 2025',
    readTime: '7 min read',
    color: 'bg-white',
    textColor: 'text-[#0C2298]',
  },
  {
    category: 'Cyber Resilience',
    title: 'Integrated Risk: Why Cyber Cannot Be Managed in a Silo',
    excerpt:
      'Cyber threats sit at the intersection of technology, strategy and organisational resilience. Leaders who treat it as an IT problem alone are exposing their businesses.',
    date: 'March 2025',
    readTime: '5 min read',
    color: 'bg-[#EEF2FF]',
    textColor: 'text-[#0C2298]',
  },
  {
    category: 'ESG',
    title: 'ESG Beyond Compliance: Building Sustainable Competitive Advantage',
    excerpt:
      'Businesses that treat ESG as a reporting obligation are missing a strategic opportunity. Here is how to embed sustainability into the core growth strategy.',
    date: 'February 2025',
    readTime: '6 min read',
    color: 'bg-white',
    textColor: 'text-[#0C2298]',
  },
]

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-semibold text-[#537AED] tracking-widest uppercase mb-4 block">
              Featured Insights
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight text-balance">
              Perspectives on Leadership &amp; Strategy
            </h2>
          </div>
          <Link
            href="#contact"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-[#537AED] hover:text-[#0C2298] transition-colors duration-200 group"
          >
            View all insights
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group rounded-3xl p-7 border border-[#D0DAF8] hover:shadow-[0_12px_50px_rgba(83,122,237,0.12)] transition-all duration-300 flex flex-col cursor-pointer ${insight.color}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${
                    insight.color === 'bg-[#0C2298]'
                      ? 'text-[#537AED] border-[#537AED]/30 bg-white/10'
                      : 'text-[#537AED] border-[#537AED]/20 bg-[#EEF2FF]'
                  }`}
                >
                  {insight.category}
                </span>
                <ArrowRight
                  size={16}
                  className={`opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ${
                    insight.color === 'bg-[#0C2298]' ? 'text-white' : 'text-[#537AED]'
                  }`}
                />
              </div>

              <h3 className={`font-serif text-xl leading-snug mb-3 flex-1 ${insight.textColor}`}>
                {insight.title}
              </h3>

              <p
                className={`font-sans text-sm leading-relaxed font-light mb-6 ${
                  insight.color === 'bg-[#0C2298]' ? 'text-white/60' : 'text-[#0C2298]/60'
                }`}
              >
                {insight.excerpt}
              </p>

              <div
                className={`flex items-center gap-3 text-xs font-medium pt-4 border-t ${
                  insight.color === 'bg-[#0C2298]' ? 'border-white/10 text-white/40' : 'border-[#D0DAF8] text-[#537AED]/60'
                }`}
              >
                <Calendar size={12} />
                <span>{insight.date}</span>
                <span>&middot;</span>
                <span>{insight.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
