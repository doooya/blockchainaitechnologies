import SEOHead from '../components/SEOHead'

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact Us" description="Contact BlockchainAI Technologies" canonical="/contact" />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Have a question, suggestion, or interested in acquiring this domain? We'd love to hear from you.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h2 className="font-heading font-bold text-gray-900 text-xl mb-2">🏷️ Domain Acquisition</h2>
          <p className="text-gray-600 mb-3">Interested in purchasing this domain? Contact us directly:</p>
          <a href="mailto:info@selectauthority.com" className="text-primary-600 font-bold text-lg underline hover:text-primary-700">
            info@selectauthority.com
          </a>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="font-heading font-bold text-gray-900 text-xl mb-2">📬 General Enquiries</h2>
          <p className="text-gray-600 mb-3">For editorial, partnerships, or general questions:</p>
          <a href="mailto:info@selectauthority.com" className="text-primary-600 font-bold text-lg underline hover:text-primary-700">
            info@selectauthority.com
          </a>
        </div>
      </div>
    </>
  )
}
