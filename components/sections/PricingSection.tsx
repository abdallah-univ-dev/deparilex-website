'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
    {
        id: 'ponctuel',
        name: 'Ponctuel',
        subtitle: 'Idéal pour une question ou un document',
        price: 'Sur devis',
        priceNote: 'Tarif fixe selon la mission',
        features: [
            'Réponse à une question juridique',
            'Analyse d\'un contrat ou document',
            'Rédaction d\'un acte simple',
            'Devis gratuit sous 24h',
        ],
        cta: 'Demander un devis',
        href: '/contact',
        highlight: false,
    },
    {
        id: 'accompagnement',
        name: 'Accompagnement',
        subtitle: 'Votre juriste au quotidien',
        price: 'Forfait mensuel',
        priceNote: 'Tarif selon le volume et la complexité',
        features: [
            'Questions illimitées sous 48h',
            'Relecture de contrats',
            'Veille juridique personnalisée',
            'Accompagnement dans vos projets',
            'Interlocuteur unique et dédié',
        ],
        cta: 'En savoir plus',
        href: '/contact',
        highlight: true,
    },
    {
        id: 'projet',
        name: 'Projet',
        subtitle: 'Pour les chantiers complexes',
        price: 'Sur mesure',
        priceNote: 'Devis après analyse de vos besoins',
        features: [
            'Audit juridique complet',
            'Rédaction de liasses documentaires',
            'Accompagnement en négociation',
            'Structuration juridique d\'entreprise',
        ],
        cta: 'Discutons de votre projet',
        href: '/contact',
        highlight: false,
    },
]

export default function PricingSection() {
    return (
        <section className="py-24 bg-off-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gold/60" />
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Tarifs</span>
                        <div className="h-px w-12 bg-gold/60" />
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-4">
                        Des formules{' '}
                        <span className="text-gold italic">transparentes</span>
                    </h2>
                    <p className="text-text-gray font-inter max-w-xl mx-auto">
                        Pas de surprise. Un devis clair avant chaque mission. Sans engagement.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className={`relative flex flex-col p-8 border transition-all duration-300 ${plan.highlight
                                    ? 'bg-navy border-gold/40 shadow-2xl shadow-navy/30'
                                    : 'bg-white border-gray-100 hover:border-gold/30 hover:shadow-lg'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-gold text-navy text-xs font-inter font-semibold px-4 py-1 tracking-widest uppercase">
                                        Recommandé
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`font-playfair text-2xl mb-1 ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`font-inter text-sm ${plan.highlight ? 'text-white/60' : 'text-text-gray'}`}>
                                    {plan.subtitle}
                                </p>
                                <div className="mt-6">
                                    <p className={`font-playfair text-3xl font-semibold ${plan.highlight ? 'text-gold' : 'text-navy'}`}>
                                        {plan.price}
                                    </p>
                                    <p className={`font-inter text-xs mt-1 ${plan.highlight ? 'text-white/50' : 'text-text-gray/70'}`}>
                                        {plan.priceNote}
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-3 flex-1 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check
                                            className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-gold' : 'text-gold'}`}
                                            strokeWidth={2}
                                        />
                                        <span className={`font-inter text-sm ${plan.highlight ? 'text-white/80' : 'text-text-gray'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.href}
                                className={`block text-center py-3 font-inter font-semibold text-sm tracking-wide transition-all duration-300 ${plan.highlight
                                        ? 'bg-gold text-navy hover:bg-gold-light'
                                        : 'border border-navy text-navy hover:bg-navy hover:text-white'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-center text-text-gray/60 font-inter text-xs mt-10"
                >
                    Toutes les missions font l&apos;objet d&apos;un devis préalable gratuit. Paiement par virement bancaire.
                </motion.p>
            </div>
        </section>
    )
}
