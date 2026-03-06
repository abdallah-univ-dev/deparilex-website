'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-navy font-inter text-sm font-medium mb-2">Nom complet *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-navy font-inter text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-navy font-inter text-sm font-medium mb-2">Téléphone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
          placeholder="06 XX XX XX XX"
        />
      </div>
      <div>
        <label className="block text-navy font-inter text-sm font-medium mb-2">Votre message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white resize-none"
          placeholder="Décrivez votre situation juridique ou votre question..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-navy text-white py-4 font-inter font-semibold text-sm tracking-wide hover:bg-gold hover:text-navy transition-all duration-300 disabled:opacity-60"
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message →'}
      </button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-sm font-inter text-center"
        >
          ✓ Message envoyé ! Nous vous répondrons sous 48h.
        </motion.p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-inter text-center">
          Une erreur s&apos;est produite. Veuillez réessayer ou nous appeler.
        </p>
      )}
    </form>
  )
}
