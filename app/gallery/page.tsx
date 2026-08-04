'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Play, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

type MediaLink = { label: string; href: string }

type MediaItem = {
  title: string
  publication: string
  date?: string
  tagline?: string
  image?: string
  links: MediaLink[]
}

// Speaking engagements. Intrinsic dimensions are declared so the lightbox
// sizes correctly and the page does not shift as the images load. `href`
// points at the LinkedIn post for that engagement, where one exists.
const photos = [
  {
    src: '/Gallary%20image/1.webp',
    width: 1080,
    height: 1350,
    caption: 'Speaker at EON Leadership on Responsible AI',
  },
  {
    src: '/Gallary%20image/2.webp',
    width: 800,
    height: 1000,
    caption: 'Speaker at EnQube Collaboration Viksit Bharat 2047 Summit',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_boardgovernance-viksitbharat2047-aigovernance-activity-7427917081511350272-Ycrt',
  },
  {
    src: '/Gallary%20image/3.webp',
    width: 800,
    height: 1192,
    caption: 'Speaker at Board Stewardship webinar',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_boardstewardship-corporategovernance-futureboards-activity-7448586711045005312-2VVP',
  },
  {
    src: '/Gallary%20image/4.webp',
    width: 1080,
    height: 1080,
    caption: 'Speaker at Veblen Boardroom Blueprint workshop',
  },
  {
    src: '/Gallary%20image/5.webp',
    width: 560,
    height: 576,
    caption: 'Jury member at Technoviti 2026 Awards organized by Banking Frontier',
  },
  {
    src: '/Gallary%20image/6.webp',
    width: 1280,
    height: 853,
    caption: 'Speaker at IIT Bombay symposium',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_responsibleai-aiinfinance-financialinclusion-activity-7445316509398216704-gniC',
  },
  {
    src: '/Gallary%20image/7.webp',
    width: 1536,
    height: 1023,
    caption: 'Speaker at India Law, Tech & AI summit',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_ai-legaltech-responsibleai-activity-7401108814248185857-1dx9',
  },
  {
    src: '/Gallary%20image/8.webp',
    width: 1536,
    height: 1025,
    caption: 'Speaker at IMC Chamber of Commerce',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_aiinfinance-freeai-rbi-activity-7385155179869929472-6WER',
  },
  {
    src: '/Gallary%20image/9.webp',
    width: 1269,
    height: 733,
    caption: 'Speaker at Microsoft forum',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_artificialintelligence-artificialintelligenceforbusiness-ugcPost-7102893389980835841-ZBfG',
  },
  {
    src: '/Gallary%20image/10.webp',
    width: 960,
    height: 578,
    caption: 'IIT Mumbai guest lecture',
    date: '14 February 2026',
    href: 'https://www.linkedin.com/posts/santanu-sengupta_leadership-careerstrategy-purposedriven-activity-7432265604511899648-SIKE',
  },
]

const mediaCoverage: MediaItem[] = [
  {
    title: 'NDTV Budget 2026 discussion',
    tagline: 'Central takeaway: this is a Budget driven by structural intent.',
    publication: 'NDTV',
    date: '2026',
    image: '/media/ndtv-budget.jpg',
    links: [
      {
        label: 'Read the LinkedIn post',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_unionbudget2026-bankingandfinance-financialsectorreforms-activity-7423930708236214272-FXzz',
      },
      { label: 'Watch the Budget session clip', href: 'https://we.tl/t-Np9c0gx1yG' },
    ],
  },
  {
    title: 'Indo-US deal: not just a tariff reset',
    publication: 'Sunday Pioneer',
    date: '8 February 2026',
    image: '/media/indo-us-tariff-reset.jpg',
    links: [
      { label: 'Read more', href: 'https://dailypioneer.com/news/indo-us-deal-not-just-a-tariff-reset' },
    ],
  },
  {
    title: 'When AI meets cyber risk: why the boardroom is now the front line',
    publication: 'ET Edge Insights',
    date: '1 March 2026',
    image: '/media/ai-esg-cyber.jpg',
    links: [
      {
        label: 'Read more',
        href: 'https://etedge-insights.com/technology/cyber-security/when-ai-meets-cyber-risk-why-the-boardroom-is-now-the-front-line/',
      },
    ],
  },
  {
    title:
      'RBI acts on fraud: customers to get up to Rs 25,000 compensation for losses in small-value fraudulent transactions',
    publication: 'ET Wealth',
    image: '/media/rbi-fraud.jpg',
    links: [
      {
        label: 'Read more',
        href: 'https://economictimes.indiatimes.com/wealth/save/rbi-acts-on-fraud-customers-to-get-up-to-rs-25000-compensation-for-losses-incurred-in-small-value-fraudulent-transactions-announces-rbi/articleshow/127970319.cms',
      },
    ],
  },
  {
    title: "Experts see RBI's rate pause as balanced move, says focus shifts to liquidity management",
    tagline: 'Comments on the RBI Monetary Policy.',
    publication: 'ANI News',
    date: 'February 2026',
    links: [
      {
        label: 'Read more',
        href: 'https://aninews.in/news/business/experts-see-rbis-rate-pause-as-balanced-move-says-focus-shifts-to-liquidity-management20260206114254/',
      },
    ],
  },
  {
    title: 'Views on the India–US trade deal',
    publication: 'Fortune India & ET BFSI',
    date: 'February 2026',
    image: '/media/fortune-india-trade.png',
    links: [
      {
        label: 'Read in Fortune India',
        href: 'https://www.fortuneindia.com/economy/us-lowers-tariffs-on-indian-imports-to-18-heres-the-timeline-of-key-events/130036',
      },
      {
        label: 'Read in ET BFSI',
        href: 'https://bfsi.economictimes.indiatimes.com/articles/tariff-reset-with-us-lifts-indias-export-competitiveness-revives-fii-and-fdi-sentiment-analysts/127882174',
      },
    ],
  },
  {
    title: "AI's role in ESG oversight",
    publication: 'Director Today',
    date: 'November 2025',
    image: '/media/ai-esg-cyber.jpg',
    links: [
      {
        label: 'Read more',
        href: 'https://www.iodglobal.com/blog/details/ais-role-in-esg-oversight-from-rear-view-to-radar',
      },
    ],
  },
]

const interviews: MediaItem[] = [
  {
    title: 'Interview with EnterpriseZone.cc',
    publication: 'EnterpriseZone.cc',
    date: 'January 2026',
    image: '/media/santanu-portrait.jpg',
    links: [
      {
        label: 'Read more',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_santanu-sengupta-board-director-former-activity-7419578296356663296-TsqR',
      },
    ],
  },
  {
    title: 'From global banking to boardrooms',
    tagline: 'A conversation on global banking, board stewardship and AI.',
    publication: 'Bloggers Alliance',
    date: '10 March 2026',
    image: '/media/bloggers-alliance.webp',
    links: [
      {
        label: 'Read more',
        href: 'https://medium.com/@bloggersalliance/santanu-sengupta-from-global-banking-to-boardrooms-47ef7985ee02',
      },
    ],
  },
]

const podcasts: MediaItem[] = [
  {
    title: 'Koffee conversation with Lion Amirr Virani',
    publication: 'Full podcast',
    image: '/media/podcast-koffee-conversation.jpg',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=UMUYFUmZsKk' }],
  },
  {
    title: 'Power of Knowing Forum: why board-level thinking wins in AI-driven finance',
    publication: 'Full podcast',
    image: '/media/podcast-power-of-knowing.jpg',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=nCEtuY68fTM' }],
  },
  {
    title: 'On board governance, risk and corporate governance',
    publication: 'Podcast I',
    links: [
      {
        label: 'Listen on LinkedIn',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_boardgovernance-riskmanagement-corporategovernance-activity-7449660259813474304-3Ddg',
      },
    ],
  },
  {
    title: 'Artificial intelligence is already transforming the boardroom',
    publication: 'Podcast II',
    links: [
      {
        label: 'Listen on LinkedIn',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_artificial-intelligence-is-already-transforming-activity-7440964272526086145-KaU9',
      },
    ],
  },
  {
    title: 'Crisis leadership and leading under uncertainty',
    publication: 'Podcast III',
    links: [
      {
        label: 'Listen on LinkedIn',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_crisisleadership-leadershipunderuncertainty-activity-7430453647060361216-IqfG',
      },
    ],
  },
]

const appointments: MediaItem[] = [
  {
    title: 'Zeron appoints Santanu Sengupta as President & Chief Growth & Strategy Officer',
    publication: 'People Matters, Elets BFSI & Indian Startup News',
    image: '/media/zeron-logo.jpg',
    links: [
      {
        label: 'Read in People Matters',
        href: 'https://www.peoplematters.in/news/appointments/former-wells-fargo-executive-santanu-sengupta-joins-zeron-as-president-41334',
      },
      {
        label: 'Read in Elets BFSI',
        href: 'https://bfsi.eletsonline.com/zeron-names-santanu-sengupta-as-president-chief-growth-strategy-officer/',
      },
      {
        label: 'Read in Indian Startup News',
        href: 'https://indianstartupnews.com/news/former-wells-fargo-apac-santanu-sengupta-joins-zeron-4577807',
      },
    ],
  },
  {
    title: 'Nexus Global Advisory Board appointment',
    tagline: 'Nexus has the potential to connect capital, innovators and enterprises.',
    publication: 'LinkedIn',
    image: '/media/nexus-advisory.jpg',
    links: [
      {
        label: 'Read more',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_nexus-europe-appoints-advisory-board-to-scale-activity-7435895327745925120-Rg06',
      },
    ],
  },
  {
    title: 'KPMG Independent Director Certification',
    publication: 'LinkedIn',
    links: [
      {
        label: 'Read more',
        href: 'https://www.linkedin.com/posts/santanu-sengupta_independentdirector-corporategovernance-kpmg-ugcPost-7272452642675580928-SQKs',
      },
    ],
  },
]

/**
 * A press / podcast card. The whole card links to the first URL; any further
 * outlets are listed beneath it. Items without a thumbnail get a branded tile
 * instead, so every card keeps the same height and the rows stay aligned.
 */
function MediaCard({ item, index, isPodcast = false }: { item: MediaItem; index: number; isPodcast?: boolean }) {
  const [primary, ...secondary] = item.links

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D0DAF8] bg-white hover:border-[#537AED] hover:shadow-[0_12px_50px_rgba(83,122,237,0.18)] transition-all duration-300"
    >
      <a
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full aspect-video overflow-hidden bg-[#EEF2FF]"
        aria-label={`${item.title} — ${primary.label}`}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-[#0C2298] px-6 text-center">
            <span className="font-serif text-2xl text-white leading-snug">{item.publication}</span>
          </span>
        )}
        {isPodcast && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0C2298] shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play size={22} className="ml-0.5 fill-current" />
            </span>
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col p-5 border-t border-[#D0DAF8]">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#0C2298] mb-2">
          {item.publication}
          {item.date && <span className="normal-case tracking-normal"> · {item.date}</span>}
        </span>

        <h3 className="font-serif text-xl text-[#0C2298] leading-snug mb-2">{item.title}</h3>

        {item.tagline && (
          <p className="font-sans text-base text-[#0C2298] leading-relaxed mb-4">{item.tagline}</p>
        )}

        <div className="mt-auto flex flex-col gap-1.5 pt-2">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#0C2298] hover:text-[#537AED] transition-colors duration-200"
          >
            {primary.label}
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          {secondary.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-[#0C2298] hover:text-[#537AED] transition-colors duration-200"
            >
              {link.label}
              <ExternalLink size={13} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

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
              Speaking engagements, panels, podcasts and press coverage from our work with founders,
              boards and senior leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaking Engagements — every card is the same square tile with the
          caption beneath, so rows and columns line up. The photos mix portrait
          posters with landscape shots, so the image is contained (not cropped)
          inside the tile: nothing gets cut off and the cards still align. */}
      <section className="pb-20 lg:pb-24 bg-white">
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
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D0DAF8] bg-white hover:border-[#537AED] hover:shadow-[0_12px_50px_rgba(83,122,237,0.18)] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`View larger: ${photo.caption}`}
                  className="relative block w-full aspect-square overflow-hidden bg-[#EEF2FF] cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-[#0C2298]/0 group-hover:bg-[#0C2298]/10 transition-colors duration-300" />
                </button>

                <div className="flex flex-1 flex-col px-5 py-4 border-t border-[#D0DAF8]">
                  <p className="font-sans text-base text-[#0C2298] leading-snug">{photo.caption}</p>
                  {photo.date && (
                    <p className="font-sans text-base text-[#0C2298] opacity-70 mt-1">{photo.date}</p>
                  )}
                  {photo.href && (
                    <a
                      href={photo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-3 inline-flex items-center gap-2 text-base font-semibold text-[#0C2298] hover:text-[#537AED] transition-colors duration-200"
                    >
                      Read more
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage & Articles */}
      <section className="py-20 lg:py-24 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Media Coverage &amp; Articles
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverage.map((item, i) => (
              <MediaCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Podcasts
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((item, i) => (
              <MediaCard key={item.title} item={item} index={i} isPodcast />
            ))}
          </div>
        </div>
      </section>

      {/* Media Interviews */}
      <section className="py-20 lg:py-24 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Media Interviews
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviews.map((item, i) => (
              <MediaCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointments & Recognition */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl lg:text-4xl text-[#0C2298] mb-10"
          >
            Appointments &amp; Recognition
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appointments.map((item, i) => (
              <MediaCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32 pt-4 bg-white">
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
            alt={active.caption}
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
