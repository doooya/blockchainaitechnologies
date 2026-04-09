import SEOHead from '../components/SEOHead'

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About Us" description="About BlockchainAI Technologies" canonical="/about" />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          BlockchainAI Technologies is an independent review and research platform covering AI tools, blockchain hardware, smart gadgets, and emerging technology.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Our mission is to help everyday people make smarter technology decisions through honest, research-backed reviews and comparisons.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          For inquiries, please contact us at{' '}
          <a href="mailto:info@selectauthority.com" className="text-primary-600 underline">
            info@selectauthority.com
          </a>
        </p>
      </div>
    </>
  )
}
