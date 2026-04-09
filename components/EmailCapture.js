import { useState } from 'react'

export default function EmailCapture({ variant = 'inline', title, subtitle }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Replace with your actual email service (Mailchimp, ConvertKit, etc.)
    // For now, simulate success
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setEmail('')
  }

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white my-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider mb-2">Free Weekly Newsletter</p>
          <h3 className="text-2xl font-heading font-bold mb-2">
            {title || 'Stay Ahead of the AI & Blockchain Curve'}
          </h3>
          <p className="text-primary-100 mb-6 text-sm">
            {subtitle || 'Get the best AI tool reviews, blockchain hardware deals, and emerging tech guides delivered to your inbox every week. No spam.'}
          </p>
          {status === 'success' ? (
            <div className="bg-white/20 rounded-xl px-6 py-4 text-white font-semibold">
              ✅ You're in! Check your inbox for a confirmation email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors text-sm disabled:opacity-70 whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing…' : 'Get Free Updates →'}
              </button>
            </form>
          )}
          <p className="text-primary-200 text-xs mt-3">Join 5,000+ tech enthusiasts. Unsubscribe anytime.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8">
      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">Free Newsletter</p>
      <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">
        {title || 'Get weekly AI & blockchain reviews'}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        {subtitle || 'The latest tool reviews, product deals, and guides — in your inbox.'}
      </p>
      {status === 'success' ? (
        <p className="text-accent-600 font-semibold text-sm">✅ Subscribed! Talk soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-70 whitespace-nowrap"
          >
            {status === 'loading' ? '…' : 'Subscribe →'}
          </button>
        </form>
      )}
    </div>
  )
}
