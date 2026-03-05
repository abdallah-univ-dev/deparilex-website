'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Qui sommes-nous</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-playfair text-5xl text-white mb-4">À propos</h1>
          <p className="text-white/60 font-inter text-lg">
            Connaissance du droit, proximité humaine.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] bg-navy/10 border border-gold/20 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-4">👤</div>
                <p className="text-text-gray font-inter text-sm">Photo d&apos;Halimé</p>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-playfair text-4xl text-navy mb-1">Halimé BRAHIM MAHAMAT</h2>
              <p className="text-gold font-inter text-sm tracking-wide">Juriste · Fondatrice de Depari&apos;Lex</p>
            </div>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-text-gray font-inter leading-relaxed">
              Juriste diplômée en droit des affaires et de l&apos;entreprise, j&apos;ai fondé Depari&apos;Lex
              avec une conviction profonde : les entrepreneurs et les dirigeants méritent un accès
              simple, clair et accessible à l&apos;expertise juridique.
            </p>
            <p className="text-text-gray font-inter leading-relaxed">
              Mon activité consiste exclusivement en des prestations d&apos;information, d&apos;analyse,
              de rédaction et d&apos;accompagnement juridique. Je n&apos;exerce pas les activités
              réservées aux avocats (représentation en justice, contentieux).
            </p>
            <p className="text-text-gray font-inter leading-relaxed">
              Mon rôle est d&apos;être votre partenaire juridique de confiance au quotidien —
              celui qui vous aide à anticiper les risques, sécuriser vos contrats et prendre
              des décisions éclairées.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Proximité', value: 'Un interlocuteur unique et disponible' },
                { label: 'Clarté', value: 'Du droit sans jargon inutile' },
                { label: 'Rigueur', value: 'Analyse précise et documentée' },
                { label: 'Réactivité', value: 'Réponse garantie sous 48h' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4 border-l-2 border-gold">
                  <p className="font-playfair text-navy font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-text-gray text-xs font-inter">{item.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-inter font-semibold hover:bg-gold hover:text-navy transition-all duration-300 mt-4"
            >
              Me contacter →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
