import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & tagline */}
          <div>
            <Image src="/logo.png" alt="Depari'Lex" width={180} height={72} className="h-16 w-auto mb-4" />
            <p className="text-white/50 text-sm font-inter leading-relaxed">
              Conseil juridique expert en droit des affaires pour entrepreneurs et dirigeants.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold font-playfair text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
                { href: '/mentions-legales', label: 'Mentions légales' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-playfair text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-white/50 text-sm font-inter">
              <li>Rue Rémi Belleau</li>
              <li>33400 Talence, Bordeaux</li>
              <li className="pt-2">
                <a href="tel:0751436250" className="hover:text-gold transition-colors">07 51 43 62 50</a>
              </li>
              <li>
                <a href="mailto:halimebrahim7@gmail.com" className="hover:text-gold transition-colors">
                  halimebrahim7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            © {new Date().getFullYear()} Depari&apos;Lex — Tous droits réservés
          </p>
          <p className="text-white/30 text-xs font-inter">
            Juriste diplômée en droit des affaires et de l&apos;entreprise
          </p>
        </div>
      </div>
    </footer>
  )
}
