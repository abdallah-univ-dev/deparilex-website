'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Shield, Clock3, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const values: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: GraduationCap, title: 'Juriste diplômée', desc: "Master en droit des affaires et de l'entreprise" },
  { Icon: Shield, title: 'Tarifs transparents', desc: 'Devis clair, sans surprise ni facturation cachée' },
  { Icon: Clock3, title: 'Réponse sous 48h', desc: 'Engagement de réactivité pour chaque demande' },
  { Icon: Briefcase, title: 'Spécialiste B2B', desc: 'Exclusivement dédié aux entreprises et dirigeants' },
]

export default function WhySection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Pourquoi Depari&apos;Lex</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Le conseil juridique<br />
            <span className="text-gold italic">autrement</span>
          </h2>
          <p className="text-white/50 font-inter max-w-xl mx-auto">
            Une approche humaine, directe et accessible du droit des affaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-gold/20 p-6 hover:border-gold/50 transition-colors duration-300 text-center group"
            >
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/60 transition-colors">
                <item.Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-lg text-gold mb-2">{item.title}</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
