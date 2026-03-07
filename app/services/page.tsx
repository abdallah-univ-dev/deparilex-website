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
    title: 'Information et veille réglementaire',
    description: "Avant de prendre certaines décisions professionnelles, il peut être utile de disposer d'un éclairage sur les cadres réglementaires applicables. Je propose un accompagnement visant à présenter les principaux cadres réglementaires relatifs au droit des affaires, de manière claire et accessible.",
    details: [
      'Présentation de textes législatifs et réglementaires',
      'Éclairage sur les cadres réglementaires applicables aux activités commerciales',
      "Points d'attention réglementaires avant certaines décisions d'entreprise",
      "Veille réglementaire relative à votre secteur d'activité",
    ],
  },
  {
    id: 'analyse',
    Icon: SearchCheck,
    title: 'Analyse contractuelle',
    description: "Avant de signer un contrat ou de vous engager dans une relation commerciale, il est essentiel d'identifier les risques et les implications de vos engagements. J'accompagne les entrepreneurs et les entreprises dans l'analyse de leurs documents contractuels afin d'identifier les points de vigilance et d'éclairer leurs décisions.",
    details: [
      'Analyse et révision de contrats commerciaux',
      'Audit de pratiques contractuelles',
      'Identification des risques contractuels',
      'Analyse de conformité réglementaire',
    ],
  },
  {
    id: 'redaction',
    Icon: PenLine,
    title: 'Structuration de documents contractuels',
    description: "Des documents contractuels clairs constituent un élément essentiel des relations d'affaires. Nous accompagnons les entreprises dans la préparation et la structuration de leurs documents professionnels.",
    details: [
      'Structuration de contrats commerciaux et de prestation',
      'Organisation de Conditions Générales de Vente (CGV)',
      "Préparation de statuts et pactes d'associés",
      'Rédaction de correspondances professionnelles',
    ],
  },
  {
    id: 'accompagnement',
    Icon: Handshake,
    title: "Accompagnement des projets d'entreprise",
    description: "Bénéficiez d'un accompagnement dans la structuration et le suivi de vos projets professionnels. J'accompagne entrepreneurs et entreprises dans l'organisation de leurs relations contractuelles et le suivi de leurs projets.",
    details: [
      "Suivi de projets de création ou de développement d'entreprise",
      'Accompagnement dans la préparation de négociations commerciales',
      "Suivi contractuel régulier de votre activité",
      'Préparation de dossiers et de synthèses réglementaires',
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
