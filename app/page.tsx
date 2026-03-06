import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: "Depari'Lex — Conseil Juridique en Droit des Affaires à Bordeaux",
  description: "Conseil juridique expert pour entrepreneurs et dirigeants à Bordeaux. Information, analyse, rédaction de contrats et accompagnement personnalisé en droit des affaires.",
  openGraph: {
    title: "Depari'Lex — Conseil Juridique à Bordeaux",
    description: "Information, analyse, rédaction et accompagnement juridique pour entrepreneurs et dirigeants à Bordeaux.",
    url: 'https://deparilex.fr',
    siteName: "Depari'Lex",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <PricingSection />
      <AboutPreview />
      <ContactCTA />
    </main>
  )
}

