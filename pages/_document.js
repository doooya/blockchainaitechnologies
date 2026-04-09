import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-5906025502715825" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5906025502715825" crossOrigin="anonymous" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WSEVLTNRVR" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WSEVLTNRVR');
            `,
          }}
        />
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BlockchainAI Technologies',
              url: 'https://blockchainaitechnologies.com',
              logo: 'https://blockchainaitechnologies.com/images/logo.png',
              sameAs: [
                'https://twitter.com/BlockchainAITech'