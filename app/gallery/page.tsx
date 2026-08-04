'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Intrinsic dimensions are declared so the masonry columns reserve the right
// space and the page does not shift as the images load.
const photos = [
  { src: '/Gallary%20image/1.webp', width: 1080, height: 1350 },
  { src: '/Gallary%20image/2.webp', width: 800, height: 1000 },
  { src: '/Gallary%20image/3.webp', width: 800, height: 1192 },
  { src: '/Gallary%20image/4.webp', width: 1080, height: 1080 },
  { src: '/Gallary%20image/5.webp', width: 560, height: 576 },
  { src: '/Gallary%20image/6.webp', width: 1280, height: 853 },
  { src: '/Gallary%20image/7.webp', width: 1536, height: 1023 },
  { src: '/Gallary%20image/8.webp', width: 1536, height: 1025 },
  { src: '/Gallary%20image/9.webp', width: 1269, height: 733 },
  { src: '/Gallary%20image/10.webp', width: 960, height: 578 },
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

      {/* Masonry grid */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`View gallery image ${i + 1} larger`}
                className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-[#D0DAF8] bg-[#EEF2FF] cursor-pointer hover:border-[#537AED] hover:shadow-[0_12px_50px_rgba(83,122,237,0.18)] transition-all duration-300"
              >
                <Image
                  src={photo.src}
                  alt={`Insight Vector gallery image ${i + 1}`}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-[#0C2298]/0 group-hover:bg-[#0C2298]/10 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0C2298] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-3 text-balance">
                Connect for Strategic Conversations.
              </h2>
              <p className="font-sans text-white/60 font-normal">
                Speaking, panels and advisory enquiries are always welcome.
              </p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 px-10 py-4 bg-[#537AED] text-white font-semibold rounded-full hover:bg-white hover:text-[#0C2298] transition-all duration-300 shadow-lg"
            >
              Get in Touch <ArrowRight size={16} />
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
