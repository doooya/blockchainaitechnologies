import Link from 'next/link'

const FOOTER_LINKS = {
  Categories: [
    { href: '/categories/ai-tools', label: 'AI Tools' },
    { href: '/categories/ai-gadgets', label: 'AI Gadgets' },
    { href: '/categories/blockchain', label: 'Blockchain' },
    { href: '/categories/smart-home', label: 'Smart Home' },
    { href: '/categories/developer-tools', label: 'Dev Tools' },
    { href: '/categories/guides', label: 'Guides' },
  ],
  Resources: [
    { href: '/articles', label: 'All Articles' },
    { href: '/articles?type=comparison', label: 'Comparisons' },
    { href: '/articles?type=review', label: 'Reviews' },
    { href: '/articles?type=guide', label: 'How-To Guides' },
  ],
  Legal: [
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Affiliate Disclosure Banner */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-gray-400 text-center">
            <span className="font-semibold text-gray-300">Affiliate Disclosure:</span> BlockchainAI Technologies is a participant in the Amazon Services LLC Associates Program. We earn commissions from qualifying purchases at no extra cost to you.{' '}
            <Link href="/affiliate-disclosure" className="text-primary-400 hover:text-primary-300 underline">
              Learn more
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                BA
              </div>
              <span className="font-heading font-bold text-white text-lg">
                BlockchainAI<span className="text-primary-400">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your trusted source for AI tools, blockchain hardware, and emerging technology reviews. We test and compare so you don't have to.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/BlockchainAITech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="RSS Feed">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">{group}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BlockchainAI Technologies. All rights reserved. Content is for informational purposes only.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/affiliate-disclosure" className="hover:text-gray-300 transition-colors">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
