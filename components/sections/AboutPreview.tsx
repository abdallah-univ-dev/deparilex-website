'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-sm mx-auto relative overflow-hidden">
              <Image
                src="/halime.png"
                alt="Halimé BRAHIM MAHAMAT — Juriste Depari'Lex"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold z-10" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">À propos</span>
            </div>
            <h2 className="font-playfair text-4xl text-navy mb-6">
              Halimé BRAHIM MAHAMAT,<br />
              <span className="italic text-gold">juriste en droit des affaires</span>
            </h2>
            <p className="text-text-gray font-inter leading-relaxed mb-4">
              Diplômée en droit des affaires et de l&apos;entreprise, j&apos;ai fondé Depari&apos;Lex avec une conviction :
              les entrepreneurs méritent un accès clair et accessible à l&apos;expertise juridique.
            </p>
            <p className="text-text-gray font-inter leading-relaxed mb-8">
              Mon rôle n&apos;est pas de remplacer un avocat, mais de vous accompagner en amont —
              pour que chaque décision soit éclairée, chaque document solide, et chaque risque anticipé.
            </p>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-navy font-inter font-semibold text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors group"
            >
              En savoir plus
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
