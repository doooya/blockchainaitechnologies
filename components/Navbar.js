import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV_LINKS = [
  { href: '/articles', label: 'All Articles' },
  { href: '/categories/ai-tools', label: 'AI Tools' },
  { href: '/categories/ai-gadgets', label: 'AI Gadgets' },
  { href: '/categories/blockchain', label: 'Blockchain' },
  { href: '/categories/smart-home', label: 'Smart Home' },
  { href: '/categories/developer-tools', label: 'Dev Tools' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:bg-primary-700 transition-colors">
              BA
            </div>
            <span className="font-heading font-bold text-gray-900 text-lg hidden sm:block">
              BlockchainAI<span className="text-primary-600">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  router.pathname.startsWith(link.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              🔍 Browse Reviews
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  router.pathname.startsWith(link.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/articles"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg text-center hover:bg-primary-700 transition-colors"
              >
                🔍 Browse All Reviews
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
