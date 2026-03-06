import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Ressources Juridiques — Blog | Depari'Lex",
    description: "Articles et fiches pratiques en droit des affaires pour entrepreneurs et dirigeants. Comprenez vos droits, sécurisez vos contrats.",
    openGraph: {
        title: "Blog Ressources Juridiques | Depari'Lex",
        description: "Articles pratiques en droit des affaires pour entrepreneurs.",
        url: 'https://deparilex.fr/blog',
        siteName: "Depari'Lex",
        locale: 'fr_FR',
        type: 'website',
    },
}

const articles = [
    {
        slug: 'cgv-obligatoires-b2b',
        category: 'Contrats',
        readTime: '4 min',
        title: 'Les CGV sont-elles obligatoires en B2B ?',
        excerpt: 'Les Conditions Générales de Vente ne sont pas toujours obligatoires entre professionnels… mais leur absence peut vous exposer à des risques contractuels importants. Explications.',
        date: '2026-02-15',
    },
    {
        slug: 'statuts-sas-sarl-differences',
        category: 'Création d\'entreprise',
        readTime: '6 min',
        title: 'SAS ou SARL : quelle structure pour votre projet ?',
        excerpt: 'Le choix de la forme juridique est l\'une des premières décisions stratégiques d\'un entrepreneur. Tour d\'horizon des différences essentielles entre SAS et SARL.',
        date: '2026-02-01',
    },
    {
        slug: 'clause-non-concurrence-validite',
        category: 'Contrats',
        readTime: '5 min',
        title: 'Clause de non-concurrence : conditions de validité',
        excerpt: 'Une clause de non-concurrence mal rédigée est une clause nulle. Découvrez les 4 conditions cumulatives pour qu\'elle soit valable et opposable.',
        date: '2026-01-20',
    },
    {
        slug: 'sous-traitance-risques-juridiques',
        category: 'B2B',
        readTime: '5 min',
        title: 'Sous-traitance : les risques juridiques à anticiper',
        excerpt: 'La relation de sous-traitance est encadrée par des règles strictes. Obligations d\'agrément, responsabilité solidaire, paiement direct… ce que vous devez savoir.',
        date: '2026-01-08',
    },
    {
        slug: 'mise-en-demeure-rediger',
        category: 'Contentieux préventif',
        readTime: '4 min',
        title: 'Comment rédiger une mise en demeure efficace ?',
        excerpt: 'La mise en demeure est un acte précontentieux qui précède toute action en justice. Sa rédaction est déterminante pour la suite. Voici comment la structurer.',
        date: '2025-12-18',
    },
    {
        slug: 'protection-donnees-rgpd-pme',
        category: 'RGPD',
        readTime: '7 min',
        title: 'RGPD pour les PME : l\'essentiel en pratique',
        excerpt: 'Le RGPD ne concerne pas que les grandes entreprises. Collecte de données, mentions légales, registre des traitements… voici ce que chaque PME doit mettre en place.',
        date: '2025-12-05',
    },
]

const categoryColors: Record<string, string> = {
    'Contrats': 'bg-gold/10 text-gold border-gold/20',
    'Création d\'entreprise': 'bg-navy/10 text-navy border-navy/20',
    'B2B': 'bg-gold/10 text-gold border-gold/20',
    'Contentieux préventif': 'bg-navy/10 text-navy border-navy/20',
    'RGPD': 'bg-gold/10 text-gold border-gold/20',
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export default function BlogPage() {
    return (
        <main className="bg-off-white min-h-screen">
            <PageHeader
                eyebrow="Ressources"
                title="Blog juridique"
                subtitle="Articles pratiques pour entrepreneurs et dirigeants. Du droit des affaires sans jargon."
            />

            <div className="max-w-5xl mx-auto px-6 py-24">
                {/* Intro */}
                <div className="bg-white border border-gray-100 p-8 mb-16 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-12 h-12 bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-playfair text-navy text-xl mb-2">À propos de ces ressources</h2>
                        <p className="text-text-gray font-inter text-sm leading-relaxed">
                            Ces articles ont une vocation informative. Ils ne constituent pas un conseil juridique personnalisé.
                            Pour toute situation spécifique, je vous invite à{' '}
                            <Link href="/contact" className="text-gold hover:underline font-medium">
                                me contacter directement
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                {/* Articles grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <article
                            key={article.slug}
                            className="bg-white border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group flex flex-col"
                        >
                            <div className="p-8 flex flex-col flex-1">
                                {/* Meta */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className={`font-inter text-xs px-3 py-1 border ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                                        {article.category}
                                    </span>
                                    <span className="text-text-gray/50 font-inter text-xs">
                                        {article.readTime} de lecture
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="font-playfair text-navy text-xl mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                                    {article.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-text-gray font-inter text-sm leading-relaxed flex-1 mb-6">
                                    {article.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                                    <time className="text-text-gray/50 font-inter text-xs" dateTime={article.date}>
                                        {formatDate(article.date)}
                                    </time>
                                    <Link
                                        href="/contact"
                                        className="text-gold font-inter text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Lire <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA bas de page */}
                <div className="mt-20 bg-navy p-10 text-center">
                    <h3 className="font-playfair text-white text-3xl mb-3">
                        Une question sur votre situation ?
                    </h3>
                    <p className="text-white/60 font-inter mb-8 text-sm">
                        Ces articles sont généraux. Votre situation mérite une analyse personnalisée.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm hover:bg-gold-light transition-all"
                    >
                        Me poser ma question <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}
