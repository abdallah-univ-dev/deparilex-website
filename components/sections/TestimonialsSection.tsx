'use client'

import { motion } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        quote: "Halimé a su analyser notre situation contractuelle avec une clarté remarquable. Son intervention a évité un litige qui aurait pu coûter très cher à notre entreprise.",
        author: "Thomas M.",
        role: "Dirigeant, PME import-export",
        initial: "T",
    },
    {
        id: 2,
        quote: "Enfin un conseil juridique accessible et concret. J'ai reçu une réponse complète sous 48h, sans jargon. Je recommande Depari'Lex à tous les entrepreneurs.",
        author: "Sophia L.",
        role: "Fondatrice, startup tech",
        initial: "S",
    },
    {
        id: 3,
        quote: "Elle a rédigé nos CGV et notre contrat de prestation avec une précision exemplaire. On se sent protégé dans toutes nos relations commerciales depuis.",
        author: "Marc D.",
        role: "Gérant, agence de communication",
        initial: "M",
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-off-white relative overflow-hidden">
            {/* Accent line top */}
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
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Témoignages</span>
                        <div className="h-px w-12 bg-gold/60" />
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-4">
                        Ce que disent{' '}
                        <span className="text-gold italic">nos clients</span>
                    </h2>
                    <p className="text-text-gray font-inter max-w-xl mx-auto">
                        Des entrepreneurs et dirigeants qui font confiance à Depari&apos;Lex au quotidien.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="bg-white border border-gray-100 p-8 flex flex-col"
                        >
                            {/* Quote mark */}
                            <div className="text-gold/30 font-playfair text-6xl leading-none mb-4 select-none" aria-hidden="true">
                                &ldquo;
                            </div>
                            <p className="text-text-gray font-inter text-sm leading-relaxed flex-1 mb-8">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
                                {/* Avatar initiale */}
                                <div
                                    className="w-10 h-10 bg-navy flex items-center justify-center shrink-0"
                                    aria-hidden="true"
                                >
                                    <span className="font-playfair text-gold text-lg">{t.initial}</span>
                                </div>
                                <div>
                                    <p className="font-playfair text-navy font-semibold text-sm">{t.author}</p>
                                    <p className="font-inter text-text-gray text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
