import SEOHead from '../components/SEOHead'

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms of Service" description="Terms of Service for BlockchainAI Technologies" canonical="/terms-of-service" />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: 2025</p>
        <div className="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using BlockchainAI Technologies, you accept and agree to be bound by these Terms of Service.</p>
          <h2>2. Use of Content</h2>
          <p>All content on this site is for informational purposes only. We do not provide financial or investment advice.</p>
          <h2>3. Affiliate Disclosure</h2>
          <p>We participate in affiliate programs. When you click links and make purchases, we may earn a commission at no extra cost to you.</p>
          <h2>4. Limitation of Liability</h2>
          <p>BlockchainAI Technologies is not liable for any damages arising from the use of information on this site.</p>
          <h2>5. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:info@selectauthority.com" className="text-primary-600 underline">info@selectauthority.com</a></p>
        </div>
      </div>
    </>
  )
}
