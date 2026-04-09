/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      }
    }
    return config
  },
  env: {
    SITE_URL: 'https://blockchainaitechnologies.com',
    SITE_NAME: 'BlockchainAI Technologies',
    SITE_DESCRIPTION: 'Expert reviews, guides, and comparisons for AI tools, blockchain hardware, and emerging tech products.',
  },
}

module.exports = nextConfig