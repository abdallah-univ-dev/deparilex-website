import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhySection />
      <AboutPreview />
      <ContactCTA />
    </main>
  )
}
