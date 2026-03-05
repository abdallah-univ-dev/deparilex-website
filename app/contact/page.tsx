'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Contact</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-playfair text-5xl text-white mb-4">Parlons de votre projet</h1>
          <p className="text-white/60 font-inter text-lg">
            Premier échange sans engagement. Réponse garantie sous 48h.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-playfair text-3xl text-navy mb-2">Envoyez un message</h2>
            <p className="text-text-gray font-inter text-sm mb-8">Décrivez votre situation et je vous recontacte rapidement.</p>
            <div className="bg-white p-8 border border-gray-100">
              <ContactForm />
            </div>
          </motion.div>

          {/* Calendly + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Calendly */}
            <div>
              <h2 className="font-playfair text-3xl text-navy mb-2">Réserver un rendez-vous</h2>
              <p className="text-text-gray font-inter text-sm mb-6">Choisissez directement un créneau disponible.</p>
              <div className="bg-white border border-gray-100 overflow-hidden">
                <iframe
                  src="https://calendly.com/halimebrahim7"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Réserver un rendez-vous"
                />
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-navy p-8 space-y-4">
              <h3 className="font-playfair text-white text-xl mb-6">Coordonnées</h3>
              {[
                { icon: '📍', label: 'Adresse', value: 'Rue Rémi Belleau, 33400 Talence' },
                { icon: '📞', label: 'Téléphone', value: '07 51 43 62 50', href: 'tel:0751436250' },
                { icon: '✉️', label: 'Email', value: 'halimebrahim7@gmail.com', href: 'mailto:halimebrahim7@gmail.com' },
                { icon: '🕐', label: 'Délai de réponse', value: 'Sous 48 heures' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-gold text-xs font-inter uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-inter text-sm hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-inter text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
