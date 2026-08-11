'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { label: 'Strategic Advisory', href: '/strategic-advisory' },
  { label: 'Executive Coaching', href: '/executive-coaching' },
  { label: 'Leadership Development', href: '/leadership-development' },
]

// Section links are rooted at "/" so they still work from /gallery and
// /strategic-advisory, not just the home page.
const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services', hasDropdown: true },
  { label: 'Our Founder', href: '/#founder' },
  { label: 'Featured Insights', href: '/featured-insights' },
  { label: 'Media & Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/#contact' },
]

/** True when `href` is a real route (not a home-page anchor) and is the page we are on. */
function isActive(href: string, pathname: string) {
  return href.startsWith('/') && !href.includes('#') && pathname === href
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  // The Services dropdown counts as current whenever a service page is open.
  const onServicePage = services.some((s) => pathname === s.href)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ease-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-[#D0DAF8] shadow-[0_1px_16px_rgba(12,34,152,0.07)]'
          : 'bg-white/85 backdrop-blur-sm border-[#D0DAF8]/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Insight Vector home">
          <Image
            src="/logo.png"
            alt="Insight Vector"
            width={200}
            height={44}
            className="h-[18px] sm:h-6 lg:h-7 w-auto object-contain block"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  aria-current={onServicePage ? 'page' : undefined}
                  className={`group relative flex items-center gap-1.5 h-10 px-3 font-poppins text-base leading-none whitespace-nowrap transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537AED] rounded-md ${
                    onServicePage ? 'font-semibold text-[#0C2298]' : 'font-normal text-black hover:text-[#0C2298]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={15}
                    strokeWidth={2.25}
                    className={`shrink-0 mt-px transition-transform duration-300 ease-out ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                  <span
                    className={`pointer-events-none absolute bottom-1.5 left-3 right-3 h-[2px] rounded-full bg-[#0C2298] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                      onServicePage ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-[0_10px_40px_rgba(12,34,152,0.13)] border border-[#D0DAF8] overflow-hidden py-1"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          aria-current={pathname === service.href ? 'page' : undefined}
                          className={`block px-5 py-2.5 font-poppins text-base leading-snug hover:bg-[#EEF2FF] hover:text-[#0C2298] transition-colors duration-[250ms] ease-out ${
                            pathname === service.href
                              ? 'font-semibold text-[#0C2298] bg-[#EEF2FF]'
                              : 'font-normal text-black'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href, pathname) ? 'page' : undefined}
                className={`group relative flex items-center h-10 px-3 font-poppins text-base leading-none whitespace-nowrap transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537AED] rounded-md ${
                  isActive(link.href, pathname)
                    ? 'font-semibold text-[#0C2298]'
                    : 'font-normal text-black hover:text-[#0C2298]'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`pointer-events-none absolute bottom-1.5 left-3 right-3 h-[2px] rounded-full bg-[#0C2298] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isActive(link.href, pathname) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden -mr-1 p-2 text-[#0C2298] hover:text-[#537AED] transition-colors duration-300 ease-out"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-[#D0DAF8] overflow-hidden"
          >
            <div className="px-5 sm:px-6 py-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(link.href, pathname) ? 'page' : undefined}
                  className={`py-3.5 font-poppins text-base border-b border-[#EEF2FF] transition-colors duration-300 ease-out ${
                    isActive(link.href, pathname)
                      ? 'font-semibold text-[#0C2298] border-l-2 border-l-[#537AED] pl-3'
                      : 'font-normal text-black hover:text-[#0C2298]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col pt-2">
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === service.href ? 'page' : undefined}
                    className={`py-2.5 pl-4 font-poppins text-base transition-colors duration-300 ease-out ${
                      pathname === service.href
                        ? 'font-semibold text-[#0C2298]'
                        : 'font-normal text-black hover:text-[#0C2298]'
                    }`}
                  >
                    {`— ${service.label}`}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
