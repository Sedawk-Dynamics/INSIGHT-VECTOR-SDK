'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { socialLinks } from '@/components/social-icons'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="mb-4">
            <h2 className="font-serif text-5xl lg:text-6xl text-[#0C2298] leading-tight text-balance">
              Contact Us
            </h2>
            <span className="block mt-3 text-xs font-semibold text-[#0C2298] tracking-widest uppercase">
              Start a Conversation
            </span>
          </div>
          <p className="font-sans text-[#0C2298] font-normal leading-relaxed">
            Whether you are navigating a strategic challenge, a leadership transition or are simply curious about how we work, we would welcome a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl text-[#0C2298] mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@insightvector.com' },
                  { icon: Phone, label: 'Phone', value: '+65 0000 0000' },
                  { icon: MapPin, label: 'Location', value: 'Singapore · Global' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#0C2298]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#0C2298] font-semibold uppercase tracking-wider">{label}</p>
                      <p className="font-sans text-sm text-[#0C2298] font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold text-[#0C2298] tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#0C2298] hover:bg-[#537AED] hover:text-white transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Info box */}
            <div className="rounded-2xl bg-[#EEF2FF] border border-[#D0DAF8] p-6">
              <p className="font-serif text-lg text-[#0C2298] mb-2">Every engagement is founder-led.</p>
              <p className="text-sm font-sans text-[#0C2298] font-normal leading-relaxed">
                When you reach out to Insight Vector, you engage directly with senior-level expertise and personalised attention from the first conversation.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-[#D0DAF8] shadow-[0_8px_40px_rgba(83,122,237,0.08)] p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-2">
                    <Send size={24} className="text-[#0C2298]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#0C2298]">Thank you for reaching out.</h3>
                  <p className="font-sans text-[#0C2298] font-normal max-w-sm">
                    We will be in touch shortly. Every inquiry is personally reviewed.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: 'name', label: 'Full Name', type: 'text', required: true },
                      { id: 'email', label: 'Email Address', type: 'email', required: true },
                      { id: 'company', label: 'Company / Organisation', type: 'text', required: false },
                      { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
                    ].map((field) => (
                      <div key={field.id} className="flex flex-col gap-1.5">
                        <label htmlFor={field.id} className="text-xs font-semibold text-[#0C2298] tracking-wide uppercase">
                          {field.label}
                          {field.required && <span className="text-[#0C2298] ml-1">*</span>}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          required={field.required}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#D0DAF8] bg-[#EEF2FF]/30 text-[#0C2298] text-sm placeholder:text-[#0C2298]/50 focus:outline-none focus:border-[#537AED] focus:ring-2 focus:ring-[#537AED]/10 transition-all duration-200 font-sans"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-[#0C2298] tracking-wide uppercase">
                      Message <span className="text-[#0C2298]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D0DAF8] bg-[#EEF2FF]/30 text-[#0C2298] text-sm placeholder:text-[#0C2298]/50 focus:outline-none focus:border-[#537AED] focus:ring-2 focus:ring-[#537AED]/10 transition-all duration-200 resize-none font-sans"
                      placeholder="Tell us about your challenge or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0C2298] text-white font-semibold rounded-xl hover:bg-[#537AED] transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(83,122,237,0.3)] group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>

                  <p className="text-xs text-center text-[#0C2298] font-sans">
                    Your information is kept strictly confidential and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
