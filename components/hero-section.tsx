'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Globe } from 'lucide-react'
import HeroStats from '@/components/hero-stats'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(83,122,237,0.06) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(12,34,152,0.04) 0%, transparent 50%)`,
        }}
      />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#537AED 1px, transparent 1px), linear-gradient(90deg, #537AED 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEF2FF] rounded-full border border-[#D0DAF8]"
            >
              <span className="w-2 h-2 rounded-full bg-[#537AED] animate-pulse" />
              <span className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase">
                Founder-Led Strategic Advisory
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#0C2298] text-balance"
            >
              Clarity for{' '}
              <span className="text-[#0C2298]">Complexity.</span>
              <br />
              Direction for{' '}
              <span className="relative inline-block">
                What Comes Next.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#537AED] origin-left"
                />
              </span>
            </motion.h1>

            {/* Practice pillars */}
            <motion.div
              custom={1.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[#0C2298]"
            >
              {['Strategy', 'Growth', 'Risk', 'Leadership'].map((pillar, i) => (
                <span key={pillar} className="flex items-center gap-x-3">
                  {i > 0 && <span aria-hidden="true" className="text-[#0C2298]">|</span>}
                  <span className="text-lg lg:text-xl font-medium tracking-wide">{pillar}</span>
                </span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-sans text-lg text-[#0C2298] leading-relaxed max-w-xl font-light"
            >
              Insight Vector is a founder-led strategic advisory, executive coaching and leadership
              development firm helping founders, business owners, CXOs and senior leaders navigate
              complexity, accelerate growth and build future-ready organisations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 bg-[#0C2298] text-white font-semibold rounded-full hover:bg-[#537AED] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(83,122,237,0.4)]"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#0C2298] font-semibold rounded-full border-2 border-[#D0DAF8] hover:border-[#537AED] hover:text-[#0C2298] transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Hero stat boxes */}
            <HeroStats className="pt-4 border-t border-[#D0DAF8]" />
          </div>

          {/* Right: Image with floating cards */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(12,34,152,0.15)]">
              <Image
                src="/hero-boardroom.png"
                alt="Executive boardroom strategy session"
                width={680}
                height={520}
                className="w-full h-[520px] object-cover"
                priority
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C2298]/10 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-[0_8px_40px_rgba(83,122,237,0.18)] border border-[#D0DAF8] p-5 w-56"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#0C2298]" />
                </div>
                <span className="text-sm font-semibold text-[#0C2298]">Growth Strategy</span>
              </div>
              <p className="text-xs text-[#0C2298] leading-relaxed">
                Turning ambition into sustainable, disciplined growth.
              </p>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -top-6 -right-6 bg-[#0C2298] rounded-2xl shadow-[0_8px_40px_rgba(12,34,152,0.3)] p-5 w-52"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Globe size={14} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Global Reach</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Multi-market leadership across diverse geographies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
