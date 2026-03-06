import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "À propos — Halimé BRAHIM MAHAMAT, juriste | Depari'Lex",
  description: "Juriste diplômée en droit des affaires et de l'entreprise, fondatrice de Depari'Lex à Bordeaux. Accompagnement juridique des entrepreneurs avec proximité et rigueur.",
  openGraph: {
    title: "Halimé BRAHIM MAHAMAT — Juriste | Depari'Lex",
    description: "Juriste diplômée en droit des affaires, fondatrice de Depari'Lex à Bordeaux.",
    url: 'https://deparilex.fr/a-propos',
    siteName: "Depari'Lex",
    locale: 'fr_FR',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <main className="bg-off-white min-h-screen">
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="À propos"
        subtitle="Connaissance du droit, proximité humaine."
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div>
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/halime.png"
                alt="Halimé BRAHIM MAHAMAT — Juriste fondatrice de Depari'Lex"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold z-10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold z-10" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </main>
  )
}
