'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, SearchCheck, PenLine, Handshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

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
      {/* Header */}
      <section className="bg-navy py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2340] to-navy" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Nos Prestations</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-playfair text-5xl text-white mb-4">Nos Services</h1>
          <p className="text-white/60 font-inter text-lg">
            Quatre prestations conçues pour répondre aux besoins juridiques concrets des entrepreneurs.
          </p>
        </motion.div>
      </section>

      {/* Services detail */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
          </motion.div>
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
