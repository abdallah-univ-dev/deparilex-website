'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, SearchCheck, PenLine, Handshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: { Icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    Icon: BookOpen,
    title: 'Information juridique',
    description: 'Réponses claires et précises à vos questions de droit des affaires. Comprenez vos droits et obligations avant chaque décision importante.',
    href: '/services#information',
  },
  {
    Icon: SearchCheck,
    title: 'Analyse juridique',
    description: "Examen approfondi de vos contrats, situations et risques juridiques. Identifiez les points de vigilance avant qu'ils deviennent des problèmes.",
    href: '/services#analyse',
  },
  {
    Icon: PenLine,
    title: 'Rédaction de documents',
    description: 'Contrats, CGV, statuts, courriers et actes juridiques rédigés sur mesure. Des documents solides qui protègent vos intérêts.',
    href: '/services#redaction',
  },
  {
    Icon: Handshake,
    title: 'Accompagnement juridique',
    description: 'Suivi personnalisé dans vos projets et décisions stratégiques. Un partenaire juridique de confiance à vos côtés au quotidien.',
    href: '/services#accompagnement',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Nos Prestations</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-4">
            Un accompagnement juridique<br />
            <span className="italic text-gold">sur mesure</span>
          </h2>
          <p className="text-text-gray font-inter max-w-xl mx-auto">
            Des prestations adaptées aux besoins réels des entrepreneurs et dirigeants, sans jargon inutile.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-white border border-gray-100 p-8 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                <service.Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-xl text-navy mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-text-gray font-inter text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-gold text-sm font-inter font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                En savoir plus <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
