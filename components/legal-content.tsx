import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

/** One block of a legal document: a heading plus paragraphs and/or a bullet list. */
export type LegalSection = {
  heading: string
  paragraphs?: readonly string[]
  bullets?: readonly string[]
}

type Props = {
  title: string
  /** Rendered under the title, e.g. "Last updated 4 September 2026". */
  updated: string
  intro: string
  sections: readonly LegalSection[]
}

/**
 * Shared shell for the three legal pages. These are static documents, so the
 * component stays a server component — no animation, no client state.
 */
export default function LegalContent({ title, updated, intro, sections }: Props) {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Header. The top padding clears the fixed navbar. */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14 bg-[#EEF2FF]/40 border-b border-[#D0DAF8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="block text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-3">
            Legal
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl text-[#0C2298] leading-tight text-balance">
            {title}
          </h1>
          <p className="mt-4 font-sans text-sm text-[#0C2298]/80">{updated}</p>
          <p className="mt-5 font-sans text-[#0C2298] font-normal leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
          {sections.map((section) => (
            <div key={section.heading} className="space-y-3">
              <h2 className="font-serif text-2xl lg:text-3xl text-[#0C2298]">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="font-sans text-[#0C2298] font-normal leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-2 font-sans text-[#0C2298] font-normal leading-relaxed marker:text-[#537AED]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 48)}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Cross-links between the three documents. */}
          <div className="rounded-2xl bg-[#EEF2FF] border border-[#D0DAF8] p-6">
            <p className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-3">
              Related
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms-of-use' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Contact Us', href: '/#contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#0C2298] font-medium hover:text-[#537AED] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
