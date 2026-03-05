'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-[#0d223e] to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/8 rounded-full blur-[80px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Contact</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Parlons de votre<br />
            <span className="text-gold italic">situation juridique</span>
          </h2>
          <p className="text-white/60 font-inter mb-10 leading-relaxed">
            Un premier échange pour comprendre vos besoins, sans engagement.
            Réponse garantie sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
            >
              Prendre rendez-vous
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="tel:0751436250"
              className="border border-white/20 text-white px-8 py-4 font-inter font-medium text-sm tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-300"
            >
              07 51 43 62 50
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
