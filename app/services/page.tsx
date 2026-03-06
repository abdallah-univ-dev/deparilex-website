import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { BookOpen, SearchCheck, PenLine, Handshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: "Nos Services — Conseil juridique en droit des affaires | Depari'Lex",
  description: "Découvrez nos 4 prestations juridiques : information, analyse, rédaction de contrats et accompagnement personnalisé pour entrepreneurs à Bordeaux.",
  openGraph: {
    title: "Nos Services | Depari'Lex",
    description: "Information, analyse, rédaction et accompagnement juridique pour entrepreneurs et dirigeants.",
    url: 'https://deparilex.fr/services',
    siteName: "Depari'Lex",
    locale: 'fr_FR',
    type: 'website',
  },
}

const services: { id: string; Icon: LucideIcon; title: string; description: string; details: string[] }[] = [
  {
    id: 'information',
    Icon: BookOpen,
    title: 'Information juridique',
    description: "Vous avez une question juridique mais ne savez pas à qui vous adresser ? Je vous apporte des réponses claires, précises et adaptées à votre situation, sans jargon inutile.",
    details: [
      'Interprétation de textes de loi et réglementations',
      'Réponse à toute question de droit des affaires',
      'Point juridique avant une décision stratégique',
      'Veille réglementaire pour votre secteur',
    ],
  },
  {
    id: 'analyse',
    Icon: SearchCheck,
    title: 'Analyse juridique',
    description: "Avant de signer, de vous engager ou de prendre une décision importante, une analyse juridique rigoureuse vous permet d'identifier les risques et de sécuriser votre position.",
    details: [
      'Analyse et révision de contrats commerciaux',
      'Audit de vos pratiques contractuelles',
      'Identification des risques juridiques',
      'Analyse de conformité réglementaire',
    ],
  },
  {
    id: 'redaction',
    Icon: PenLine,
    title: 'Rédaction de documents',
    description: "Des documents juridiques bien rédigés sont le fondement de toute relation d'affaires sécurisée. Je rédige des documents sur mesure qui protègent réellement vos intérêts.",
    details: [
      "Contrats commerciaux et de prestation",
      'Conditions Générales de Vente (CGV)',
      "Statuts et pactes d'associés",
      'Courriers et mises en demeure',
    ],
  },
  {
    id: 'accompagnement',
    Icon: Handshake,
    title: 'Accompagnement juridique',
    description: "Bénéficiez d'un suivi juridique personnalisé dans la durée. Je deviens votre interlocuteur juridique de référence pour toutes vos questions au quotidien.",
    details: [
      'Suivi de vos projets de création ou développement',
      'Accompagnement dans vos négociations',
      'Support juridique régulier (forfait mensuel)',
      'Préparation de dossiers et synthèses juridiques',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-off-white min-h-screen">
      <PageHeader
        eyebrow="Nos Prestations"
        title="Nos Services"
        subtitle="Quatre prestations conçues pour répondre aux besoins juridiques concrets des entrepreneurs."
      />

      {/* Services detail */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="w-14 h-14 border border-navy/20 flex items-center justify-center mb-6">
                <service.Icon className="w-6 h-6 text-navy" strokeWidth={1.5} />
              </div>
              <h2 className="font-playfair text-3xl text-navy mb-4">{service.title}</h2>
              <p className="text-text-gray font-inter leading-relaxed mb-6">{service.description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-inter font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Demander un devis →
              </Link>
            </div>
            <div className={`bg-white border border-gray-100 p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h4 className="font-playfair text-navy text-lg mb-4">Ce que j&apos;interviens :</h4>
              <ul className="space-y-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-text-gray font-inter text-sm">
                    <span className="text-gold mt-0.5 shrink-0">✦</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-16 text-center px-6">
        <h3 className="font-playfair text-3xl text-white mb-4">Prêt à sécuriser votre activité ?</h3>
        <p className="text-white/60 font-inter mb-8">Contactez-nous pour un premier échange sans engagement.</p>
        <Link href="/contact" className="bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm hover:bg-gold-light transition-all">
          Prendre rendez-vous →
        </Link>
      </section>
    </main>
  )
}
