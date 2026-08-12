'use client'

import Image from 'next/image'
import Link from 'next/link'
import { socialLinks } from '@/components/social-icons'

const footerLinks = {
  Company: [
    { label: 'About Insight Vector', href: '/#about' },
    { label: 'Our Founder', href: '/#founder' },
    { label: 'Our Values', href: '/#about' },
    { label: 'Why Choose Us', href: '/#about' },
  ],
  Services: [
    { label: 'Strategic Advisory', href: '/strategic-advisory' },
    { label: 'Executive Coaching', href: '/executive-coaching' },
    { label: 'Leadership Development', href: '/leadership-development' },
  ],
  Resources: [
    { label: 'Featured Insights', href: '/featured-insights' },
    { label: 'Media & Gallery', href: '/gallery' },
    { label: 'Newsletter', href: '/#contact' },
  ],
}

/** The Boardroom & Beyond newsletter on LinkedIn. */
const NEWSLETTER_URL =
  'https://www.linkedin.com/newsletters/boardroom-beyond-7334260123055321088/'

export default function Footer() {
  return (
    /* Light ground and border, matching the header. */
    <footer className="bg-white border-t border-[#D0DAF8] text-[#0C2298]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/logo.png"
              alt="Insight Vector"
              width={180}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <p className="font-sans text-sm text-[#0C2298] leading-relaxed font-normal max-w-xs">
              Clarity for Complexity. Direction for What Comes Next. A founder-led strategic advisory, executive coaching and leadership development firm.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-[#EEF2FF] border border-[#D0DAF8] flex items-center justify-center text-[#0C2298] hover:bg-[#537AED] hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#0C2298] hover:text-[#537AED] transition-colors duration-200 font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[#D0DAF8]">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-serif text-xl text-[#0C2298] mb-1">Stay Informed</h4>
              <p className="text-sm text-[#0C2298] font-sans font-normal">
                Receive occasional insights on strategy, leadership and risk.
              </p>
            </div>
            {/* Subscribing happens on LinkedIn, so this is a link rather than a form. */}
            <div className="flex md:justify-end">
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#537AED] text-white text-sm font-semibold rounded-xl hover:bg-[#0C2298] transition-all duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D0DAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0C2298] font-sans">
          <p>&copy; {new Date().getFullYear()} Insight Vector. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[#537AED] transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#537AED] transition-colors duration-200">Terms of Use</Link>
            <Link href="#" className="hover:text-[#537AED] transition-colors duration-200">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
