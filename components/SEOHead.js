import Head from 'next/head'
import { SITE } from '../lib/seo'

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  article = false,
  publishedTime,
  modifiedTime,
  structuredData,
  faqStructuredData,
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} – AI & Blockchain Tech Reviews`
  const fullUrl = canonical ? `${SITE.url}${canonical}` : SITE.url
  const desc = description || SITE.description

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image" content={`${SITE.url}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${SITE.url}${ogImage}`} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#4f46e5" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
    </Head>
  )
}
