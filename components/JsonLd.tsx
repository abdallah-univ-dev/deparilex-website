/**
 * JSON-LD Structured Data — LegalService
 * Référence : https://schema.org/LegalService
 * Améliore la visibilité dans les résultats enrichis Google
 * et Google Maps (SEO local Bordeaux / Talence)
 */
export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: "Depari'Lex",
        description:
            "Cabinet de conseil juridique spécialisé en droit des affaires et de l'entreprise. Information, analyse, rédaction et accompagnement juridique pour entrepreneurs et dirigeants.",
        url: 'https://deparilex.fr',
        telephone: '+33751436250',
        email: 'halimebrahim7@gmail.com',
        founder: {
            '@type': 'Person',
            name: 'Halimé BRAHIM MAHAMAT',
            jobTitle: 'Juriste en droit des affaires',
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rue Rémi Belleau',
            addressLocality: 'Talence',
            postalCode: '33400',
            addressCountry: 'FR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 44.808,
            longitude: -0.598,
        },
        areaServed: [
            { '@type': 'City', name: 'Bordeaux' },
            { '@type': 'City', name: 'Talence' },
            { '@type': 'Country', name: 'France' },
        ],
        serviceType: [
            'Information juridique',
            'Analyse juridique',
            'Rédaction de contrats',
            'Accompagnement juridique',
            'Conseil en droit des affaires',
        ],
        priceRange: '€€',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        },
        sameAs: [],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
