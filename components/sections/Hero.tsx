'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0d223e] to-navy" />
        {/* Gold accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[80px]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">
            Cabinet de Conseil Juridique
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Votre droit des affaires,{' '}
          <span className="text-gold italic">maîtrisé.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl font-inter font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Conseil juridique expert pour entrepreneurs et dirigeants.
          Information, analyse, rédaction et accompagnement en droit des affaires.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
          >
            Prendre rendez-vous
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/services"
            className="border border-white/20 text-white px-8 py-4 font-inter font-medium text-sm tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-300"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase font-inter">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
