/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blockchainaitechnologies.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    additionalSitemaps: [
      'https://blockchainaitechnologies.com/sitemap.xml',
    ],
  },
}
