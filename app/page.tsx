import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ValuesSection from '@/components/values-section'
import FounderSection from '@/components/founder-section'
import WhyChooseSection from '@/components/why-choose-section'
import InsightsSection from '@/components/insights-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (  
    
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <FounderSection />
      <WhyChooseSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
