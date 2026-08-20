import {
  FOUNDER,
  ORGANISATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from '@/lib/site'

/**
 * JSON-LD graph describing the business, its founder, the site and the services
 * offered. Answer engines lean on this to attribute a claim to an entity rather
 * than to a loose page of text, so the @id values are stable and cross-linked.
 */
function graph() {
  const orgId = `${SITE_URL}/#organization`
  const personId = `${SITE_URL}/#founder`
  const siteId = `${SITE_URL}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        slogan: 'Clarity for Complexity. Direction for What Comes Next.',
        email: ORGANISATION.email,
        telephone: ORGANISATION.telephone,
        logo: { '@type': 'ImageObject', url: ORGANISATION.logo },
        image: ORGANISATION.logo,
        founder: { '@id': personId },
        address: {
          '@type': 'PostalAddress',
          addressLocality: ORGANISATION.city,
          addressCountry: ORGANISATION.country,
        },
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        knowsAbout: [
          'Strategic advisory',
          'Executive coaching',
          'Leadership development',
          'Corporate governance',
          'Integrated risk management',
          'Responsible AI',
          'ESG and sustainability',
          'Cyber resilience',
          'Board effectiveness',
          'Capital strategy and fundraising',
        ],
        sameAs: [...SOCIAL_PROFILES],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Strategic Advisory',
                url: absoluteUrl('/strategic-advisory'),
                description:
                  'Business strategy, scaling, international expansion, capital strategy, fundraising, governance and integrated risk management for founders and growth-stage companies.',
                provider: { '@id': orgId },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Executive Coaching & Mentoring',
                url: absoluteUrl('/executive-coaching'),
                description:
                  'Coaching for founders, CXOs and senior leaders navigating expanded mandates, leadership transitions, executive presence, board readiness and strategic inflection points.',
                provider: { '@id': orgId },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Leadership Development',
                url: absoluteUrl('/leadership-development'),
                description:
                  'Training, workshops and leadership programmes covering leadership capability, integrated risk, ESG and sustainability, and responsible AI.',
                provider: { '@id': orgId },
              },
            },
          ],
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: FOUNDER.name,
        jobTitle: FOUNDER.jobTitle,
        email: FOUNDER.email,
        telephone: FOUNDER.telephone,
        image: FOUNDER.image,
        url: SITE_URL,
        worksFor: { '@id': orgId },
        alumniOf: { '@type': 'Organization', name: 'Wells Fargo Bank' },
        description:
          'Founder of Insight Vector. A global business leader, Board Director, strategic advisor and ICF-credentialed Executive Coach with more than three decades of leadership across banking, strategy, growth, risk and transformation, including a former Managing Director and APAC South role at Wells Fargo Bank.',
        knowsAbout: [
          'Corporate governance',
          'Enterprise risk management',
          'Executive coaching',
          'Board effectiveness',
          'Responsible AI',
          'Cyber risk',
          'ESG oversight',
        ],
        sameAs: [FOUNDER.linkedIn],
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': orgId },
        inLanguage: 'en',
      },
    ],
  }
}

/** Site-wide entity graph. Rendered once, in the root layout. */
export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      // The payload is built from local constants, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph()) }}
    />
  )
}

type Crumb = { name: string; path: string }

/** Breadcrumb trail for a subpage, so results show a readable path. */
export function BreadcrumbStructuredData({ trail }: { trail: Crumb[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export type Faq = { question: string; answer: string }

/**
 * FAQPage markup. This is the main lever for answer engines: a question paired
 * with a self-contained answer is directly quotable, where the same fact buried
 * in prose is not.
 */
export function FaqStructuredData({ faqs }: { faqs: readonly Faq[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
