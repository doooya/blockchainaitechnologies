import SEOHead from '../components/SEOHead'

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="BlockchainAI Technologies privacy policy — how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>
        <div className="prose prose-gray max-w-none">
          <p>BlockchainAI Technologies ("we," "us," or "our") operates blockchainaitechnologies.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide Voluntarily</h3>
          <p>We collect information you voluntarily provide, including:</p>
          <ul>
            <li>Email address (when you subscribe to our newsletter)</li>
            <li>Name and contact information (when you contact us)</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>When you visit our site, we automatically collect:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent</li>
            <li>Referring URLs</li>
            <li>Device and operating system information</li>
          </ul>
          <p>This data is collected via Google Analytics and standard server logs.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To send our newsletter and updates you requested</li>
            <li>To improve our website content and user experience</li>
            <li>To respond to inquiries</li>
            <li>To analyze site traffic and usage patterns</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Cookies</h2>
          <p>We use cookies for analytics (Google Analytics), functionality, and to remember your preferences. You may disable cookies in your browser settings, but some site features may not work correctly.</p>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <ul>
            <li><strong>Google Analytics</strong> — website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>Amazon Associates</strong> — affiliate program. When you click Amazon links, Amazon's privacy policy governs data collection on their site.</li>
            <li><strong>Email service provider</strong> — for newsletter delivery. We will disclose the specific provider in the subscription confirmation.</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share data with service providers who assist us in operating the site, subject to confidentiality agreements.</p>

          <h2>Data Retention</h2>
          <p>Email subscriber data is retained until you unsubscribe. Analytics data is retained per Google Analytics default settings. Contact inquiry data is retained for 2 years unless you request earlier deletion.</p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of data processing for marketing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@blockchainaitechnologies.com.</p>

          <h2>Children's Privacy</h2>
          <p>Our site is not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this policy periodically. Significant changes will be noted at the top of this page with an updated date.</p>

          <h2>Contact</h2>
          <p>Privacy questions: privacy@blockchainaitechnologies.com</p>
        </div>
      </div>
    </>
  )
}
