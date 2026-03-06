import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import LazyCalendly from '@/components/LazyCalendly'


export const metadata: Metadata = {
  title: "Prendre rendez-vous — Contact | Depari'Lex",
  description: "Contactez Depari'Lex pour un premier échange sans engagement. Réponse garantie sous 48h. Formulaire, téléphone ou Calendly.",
  openGraph: {
    title: "Contact | Depari'Lex",
    description: "Premier échange sans engagement. Réponse garantie sous 48h.",
    url: 'https://deparilex.fr/contact',
    siteName: "Depari'Lex",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-off-white min-h-screen">
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Premier échange sans engagement. Réponse garantie sous 48h."
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <h2 className="font-playfair text-3xl text-navy mb-2">Envoyez un message</h2>
            <p className="text-text-gray font-inter text-sm mb-8">Décrivez votre situation et je vous recontacte rapidement.</p>
            <div className="bg-white p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>

          {/* Calendly + info */}
          <div className="space-y-8">
            {/* Calendly */}
            <div>
              <h2 className="font-playfair text-3xl text-navy mb-2">Réserver un rendez-vous</h2>
              <p className="text-text-gray font-inter text-sm mb-6">Choisissez directement un créneau disponible.</p>
              <LazyCalendly />
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
          </div>
        </div>
      </div>
    </main>
  )
}
