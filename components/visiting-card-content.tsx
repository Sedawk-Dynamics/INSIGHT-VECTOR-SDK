'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Globe, Mail, Phone } from 'lucide-react'
// lucide dropped brand marks in v1, so LinkedIn comes from our own set.
import { LinkedInIcon } from '@/components/social-icons'

/**
 * Contact rows for the digital card. `value` is what the visitor reads; `href`
 * is the action the row performs, so tel:/mailto: strip the display formatting.
 */
const contacts = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98198 32456',
    href: 'tel:+919819832456',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.insightvector.in',
    href: 'https://www.insightvector.in',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'santanu.sengupta@insightvector.in',
    href: 'mailto:santanu.sengupta@insightvector.in',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/santanu-sengupta',
    href: 'https://www.linkedin.com/in/santanu-sengupta',
    external: true,
  },
]

const VISITING_CARD = '/visiting-card/insight-vector-visiting-card.pdf'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function VisitingCardContent() {
  return (
    /* Standalone layout with no navbar: this page is the target of a QR code on
       a printed card, so it opens on a phone and leads with the card itself. */
    <main className="min-h-screen bg-gradient-to-b from-[#EEF2FF] to-white px-5 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-[#D0DAF8] bg-white shadow-[0_20px_60px_rgba(12,34,152,0.12)]"
        >
          {/* Masthead */}
          <div className="flex flex-col items-center border-b border-[#D0DAF8] bg-white px-6 pt-8 pb-6 text-center">
            <Image
              src="/logo.png"
              alt="Insight Vector"
              width={200}
              height={44}
              className="h-7 w-auto object-contain"
              priority
            />
            <p className="mt-4 font-sans text-base font-medium text-[#0C2298]">
              Strategic Advisory · Executive Coaching · Leadership Development
            </p>
          </div>

          {/* Headline */}
          <div className="bg-[#EEF2FF] px-6 py-7 text-center">
            <h1 className="font-serif text-3xl leading-tight text-[#0C2298] text-balance sm:text-4xl">
              Clarity in Complexity. Direction for What Comes Next.
            </h1>
          </div>

          {/* Portrait and name */}
          <div className="flex flex-col items-center px-6 pt-8">
            <motion.div custom={1} variants={fadeUp} className="relative">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(12,34,152,0.18)]">
                <Image
                  src="/founder-portrait.jpg"
                  alt="Santanu Sengupta, Founder of Insight Vector"
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-5 font-sans text-2xl font-bold text-[#0C2298]"
            >
              Santanu Sengupta
            </motion.p>
            <motion.p
              custom={2.5}
              variants={fadeUp}
              className="mt-1 font-sans text-base font-medium text-[#537AED]"
            >
              Founder
            </motion.p>
          </div>

          {/* Contact rows — each is a single tappable target */}
          <div className="mt-7 divide-y divide-[#D0DAF8] border-t border-[#D0DAF8]">
            {contacts.map(({ icon: Icon, label, value, href, external }, i) => (
              <motion.a
                key={label}
                custom={3 + i * 0.4}
                variants={fadeUp}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-[#EEF2FF]/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#537AED]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#0C2298] transition-colors duration-200 group-hover:bg-[#537AED] group-hover:text-white">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#0C2298]">
                    {label}
                  </span>
                  {/* break-all so a long email never pushes the card sideways */}
                  <span className="block break-all font-sans text-base font-medium text-[#0C2298]">
                    {value}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <motion.div custom={5} variants={fadeUp} className="space-y-3 px-6 py-7">
            <a
              href={VISITING_CARD}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0C2298] px-6 py-4 font-sans text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#537AED] hover:shadow-[0_8px_30px_rgba(83,122,237,0.35)]"
            >
              <Download size={18} />
              Download Visiting Card
            </a>
            <Link
              href="/"
              className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#D0DAF8] px-6 py-4 font-sans text-base font-semibold text-[#0C2298] transition-colors duration-300 hover:border-[#537AED]"
            >
              Explore Insight Vector
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <p className="mt-6 text-center font-sans text-sm text-[#0C2298]">
          &copy; {new Date().getFullYear()} Insight Vector. All rights reserved.
        </p>
      </div>
    </main>
  )
}
