'use client'

import Image from 'next/image'
import Link from 'next/link'
import { socialLinks } from '@/components/social-icons'

const footerLinks = {
  Company: [
    { label: 'About Insight Vector', href: '#about' },
    { label: 'Our Founder', href: '#founder' },
    { label: 'Our Values', href: '#about' },
    { label: 'Why Choose Us', href: '#about' },
  ],
  Services: [
    { label: 'Strategic Advisory', href: '#strategic-advisory' },
    { label: 'Executive Coaching', href: '#executive-coaching' },
    { label: 'Leadership Development', href: '#leadership-development' },
    { label: 'Integrated Risk', href: '#services' },
    { label: 'Responsible AI', href: '#services' },
  ],
  Resources: [
    { label: 'Featured Insights', href: '#insights' },
    { label: 'Media & Gallery', href: '/gallery' },
    { label: 'Events', href: '#contact' },
    { label: 'Newsletter', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0C2298] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/logo.png"
              alt="Insight Vector"
              width={180}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <p className="font-sans text-sm text-white/60 leading-relaxed font-normal max-w-xs">
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
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#537AED] hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-xs font-semibold text-white tracking-widest uppercase">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200 font-sans"
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
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-serif text-xl text-white mb-1">Stay Informed</h4>
              <p className="text-sm text-white/50 font-sans font-normal">
                Receive occasional insights on strategy, leadership and risk.
              </p>
            </div>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#537AED] transition-colors duration-200 font-sans"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#537AED] text-white text-sm font-semibold rounded-xl hover:bg-white hover:text-[#0C2298] transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35 font-sans">
          <p>&copy; {new Date().getFullYear()} Insight Vector. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors duration-200">Terms of Use</Link>
            <Link href="#" className="hover:text-white/60 transition-colors duration-200">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
