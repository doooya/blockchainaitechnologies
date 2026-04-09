export const SITE = {
  name: 'BlockchainAI Technologies',
  url: 'https://blockchainaitechnologies.com',
  description: 'Expert reviews, comparisons, and guides on AI tools, blockchain hardware, and emerging tech products. Find the best AI gadgets, crypto wallets, and smart devices.',
  twitterHandle: '@BlockchainAITech',
  locale: 'en_US',
}

export function buildSEO({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  article = false,
  publishedTime,
  modifiedTime,
  category,
  tags = [],
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name
  const fullUrl = canonical ? `${SITE.url}${canonical}` : SITE.url

  return {
    title: fullTitle,
    description: description || SITE.description,
    canonical: fullUrl,
    openGraph: {
      title: fullTitle,
      description: description || SITE.description,
      url: fullUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type: article ? 'article' : 'website',
      images: [{ url: `${SITE.url}${ogImage}`, width: 1200, height: 630, alt: title }],
      ...(article && publishedTime ? { publishedTime } : {}),
      ...(article && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitterHandle,
      title: fullTitle,
      description: description || SITE.description,
      images: [`${SITE.url}${ogImage}`],
    },
    structuredData: article
      ? buildArticleSchema({ title, description, canonical, publishedTime, modifiedTime, category })
      : buildWebsiteSchema(),
  }
}

export function buildArticleSchema({ title, description, canonical, publishedTime, modifiedTime, category }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE.url}${canonical}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/images/logo.png` },
    },
    articleSection: category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${canonical}` },
  }
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function buildProductSchema({ name, description, image, ratingValue, reviewCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
    },
  }
}
