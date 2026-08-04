'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Intrinsic dimensions are declared so the lightbox sizes correctly and the
// page does not shift as the images load.
const photos = [
  { src: '/Gallary%20image/1.webp', width: 1080, height: 1350, caption: 'Speaker at EON Leadership on Responsible AI' },
  { src: '/Gallary%20image/2.webp', width: 800, height: 1000, caption: 'Speaker at EnQube Collaboration Viksit Bharat Summit' },
  { src: '/Gallary%20image/3.webp', width: 800, height: 1192, caption: 'Speaker at Board Stewardship webinar' },
  { src: '/Gallary%20image/4.webp', width: 1080, height: 1080, caption: 'Speaker at Veblen Boardroom Blueprint workshop' },
  { src: '/Gallary%20image/5.webp', width: 560, height: 576, caption: 'Jury member at Technoviti 2026 Awards organized by Banking Frontier' },
  { src: '/Gallary%20image/6.webp', width: 1280, height: 853, caption: 'Speaker at IIT Bombay symposium' },
  { src: '/Gallary%20image/7.webp', width: 1536, height: 1023, caption: 'Speaker at India Law, Tech & AI summit' },
  { src: '/Gallary%20image/8.webp', width: 1536, height: 1025, caption: 'Speaker at IMC Chamber of Commerce' },
  { src: '/Gallary%20image/9.webp', width: 1269, height: 733, caption: 'Speaker at Microsoft forum' },
  { src: '/Gallary%20image/10.webp', width: 960, height: 578, caption: 'IIT Mumbai guest lecture' },
]

// Interviews and press. `href` opens the original article on the publisher's
// own site, so each card credits and links back to the source.
const mediaCoverage = [
  {
    title: 'Post-Budget conversation with NDTV',
    tagline: 'Central Takeaway: This is a Budget driven by Structural Intent',
    publication: 'NDTV',
    image: '/media/ndtv-budget.jpg',
    href: 'https://santanusengupta.com/wp-content/uploads/2026/05/NDTV-Budget-Video-1.mp4',
  },
  {
    title: 'Indo-US deal: Not just a tariff reset',
    publication: 'Sunday Pioneer',
    image: '/media/indo-us-tariff-reset.jpg',
    href: 'https://dailypioneer.com/news/indo-us-deal-not-just-a-tariff-reset',
  },
  {
    title: 'The ESG Imperative meets AI Revolution',
    publication: 'Director Today',
    image: '/media/ai-esg-cyber.jpg',
    href: 'https://www.iodglobal.com/blog/details/ais-role-in-esg-oversight-from-rear-view-to-radar',
  },
  {
    title: 'When AI meets cyber risk',
    publication: 'ET Wealth / ET Insights',
    image: '/media/ai-esg-cyber.jpg',
    href: 'https://etedge-insights.com/technology/cyber-security/when-ai-meets-cyber-risk-why-the-boardroom-is-now-the-front-line/',
  },
  {
    title: 'RBI acts on fraud',
    publication: 'ET Wealth',
    image: '/media/rbi-fraud.jpg',
    href: 'https://economictimes.indiatimes.com/wealth/save/rbi-acts-on-fraud-customers-to-get-up-to-rs-25000-compensation-for-losses-incurred-in-small-value-fraudulent-transactions-announces-rbi/articleshow/127970319.cms',
  },
  {
    title: 'Views of Mr Santanu Sengupta on India–US trade deal',
    publication: 'Fortune India',
    image: '/media/fortune-india-trade.png',
    href: 'https://www.fortuneindia.com/economy/us-lowers-tariffs-on-indian-imports-to-18-heres-the-timeline-of-key-events/130036',
  },
  {
    title: 'India–US trade deal',
    publication: 'ET BFSI',
    image: '/media/santanu-portrait.jpg',
    href: 'https://bfsi.economictimes.indiatimes.com/articles/tariff-reset-with-us-lifts-indias-export-competitiveness-revives-fii-and-fdi-sentiment-analysts/127882174',
  },
  {
    title: 'Interview with EnterpriseZone.cc',
    publication: 'EnterpriseZone.cc',
    image: '/media/santanu-portrait.jpg',
    href: 'https://enterprisezone.cc/santanu-sengupta-board-director-i-former-md-head-apac-south-wells-fargo-bank/',
  },
  {
    title: 'Interview with Bloggers Alliance',
    tagline: 'A conversation with Santanu Sengupta on global banking, board stewardship & AI',
    publication: 'Bloggers Alliance',
    image: '/media/bloggers-alliance.webp',
    href: 'https://bloggersalliance.medium.com/santanu-sengupta-from-global-banking-to-boardrooms-47ef7985ee02',
  },
  {
    title: 'Zeron appoints Santanu Sengupta as President & CGSO',
    publication: 'People Matters',
    image: '/media/zeron-logo.jpg',
    href: 'https://www.peoplematters.in/news/appointments/former-wells-fargo-executive-santanu-sengupta-joins-zeron-as-president-41334',
  },
  {
    title: 'Nexus Global Advisory Board appointment',
    tagline: 'Nexus has the potential to connect capital, innovators and enterprises',
    publication: 'LinkedIn',
    image: '/media/nexus-advisory.jpg',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_nexus-europe-appoints-advisory-board-to-scale-activity-7435895327745925120-Rg06',
  },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const close = useCallback(() => setLightbox(null), [])

  // Close on Escape and lock body scroll while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox, close])

  const active = lightbox === null ? null : photos[lightbox]

  return (
    <div className="bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-14 bg-gradient-to-b from-[#EEF2FF] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-4 block">
              Media &amp; Gallery
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight mb-5 text-balance">
              Gallery
            </h1>
            <p className="font-sans text-lg text-[#0C2298] leading-relaxed font-normal">
              Speaking engagements, panels, podcasts and moments from our work with founders,
              boards and senior leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaking Engagements — every card is the same square tile with the
          caption beneath, so rows and columns line up. The photos mix portrait
          posters with landscape shots, so the image is contained (not cropped)
          inside the tile: nothing gets cut off and the cards still align. */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Speaking Engagements
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`View larger: ${photo.caption}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D0DAF8] bg-white text-left cursor-pointer hover:border-[#537AED] hover:shadow-[0_12px_50px_rgba(83,122,237,0.18)] transition-all duration-300"
              >
                <span className="relative block w-full aspect-square overflow-hidden bg-[#EEF2FF]">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-[#0C2298]/0 group-hover:bg-[#0C2298]/10 transition-colors duration-300" />
                </span>
                <span className="flex flex-1 items-center px-5 py-4 border-t border-[#D0DAF8] font-sans text-base text-[#0C2298] leading-snug">
                  {photo.caption}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews & Media Coverage */}
      <section className="py-20 lg:py-24 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Interviews &amp; Media Coverage
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverage.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D0DAF8] bg-white hover:border-[#537AED] hover:shadow-[0_12px_50px_rgba(83,122,237,0.18)] transition-all duration-300"
              >
                <span className="relative block w-full aspect-video overflow-hidden bg-[#EEF2FF]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </span>

                <span className="flex flex-1 flex-col p-5 border-t border-[#D0DAF8]">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#0C2298] mb-2">
                    {item.publication}
                  </span>
                  <span className="font-serif text-xl text-[#0C2298] leading-snug mb-2">
                    {item.title}
                  </span>
                  {item.tagline && (
                    <span className="font-sans text-base text-[#0C2298] leading-relaxed mb-4">
                      {item.tagline}
                    </span>
                  )}
                  <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-[#0C2298]">
                    Read more
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0C2298] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-3 text-balance">
                Open to Meaningful Conversations Around Governance, Leadership &amp; Strategic
                Transformation
              </h2>
              <p className="font-sans text-white/60 font-normal">
                For board roles, advisory mandates, or executive coaching &amp; mentoring and
                speaking engagements, you may reach out directly.
              </p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 px-10 py-4 bg-[#537AED] text-white font-semibold rounded-full hover:bg-white hover:text-[#0C2298] transition-all duration-300 shadow-lg"
            >
              Connect for Strategic Conversations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C2298]/90 backdrop-blur-sm p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-200"
          >
            <X size={20} />
          </button>
          <Image
            src={active.src}
            alt="Insight Vector gallery image enlarged"
            width={active.width}
            height={active.height}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  )
}
