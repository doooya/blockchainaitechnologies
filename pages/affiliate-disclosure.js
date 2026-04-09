import SEOHead from '../components/SEOHead'
import Link from 'next/link'

export default function AffiliateDisclosure() {
  return (
    <>
      <SEOHead
        title="Affiliate Disclosure"
        description="BlockchainAI Technologies affiliate disclosure — how we earn commissions and how that affects our content."
        canonical="/affiliate-disclosure"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl font-extrabold text-gray-900 mb-4">Affiliate Disclosure</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>
        <div className="prose prose-gray max-w-none">
          <h2>Our Commitment to Transparency</h2>
          <p>
            BlockchainAI Technologies (<strong>blockchainaitechnologies.com</strong>) is committed to full transparency about how this site operates and how we earn revenue. This disclosure explains our affiliate relationships and their effect on our content.
          </p>

          <h2>Amazon Associates Program</h2>
          <p>
            BlockchainAI Technologies is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p>
            When you click on an Amazon product link on this website and make a qualifying purchase, we may earn a small commission at <strong>no additional cost to you</strong>. This commission helps fund our research, testing, and editorial operations.
          </p>

          <h2>How Affiliate Relationships Affect Our Content</h2>
          <p>
            We want to be explicit about what our affiliate relationships do and do not mean:
          </p>
          <ul>
            <li><strong>Products are NOT selected because they have affiliate programs.</strong> We choose products to review based on their relevance, quality, and reader interest. The existence of an affiliate program is never a selection criterion.</li>
            <li><strong>Rankings are NOT paid for.</strong> No manufacturer or vendor has paid for favorable placement, positive reviews, or top rankings on this site.</li>
            <li><strong>We recommend products we believe in.</strong> Our editorial team makes purchasing recommendations based on research, testing results, and genuine assessment of product value — not commission rates.</li>
            <li><strong>Negative findings are published.</strong> If a product has significant weaknesses, we report them regardless of affiliate relationship status.</li>
          </ul>

          <h2>Other Affiliate Programs</h2>
          <p>
            In addition to Amazon, we may participate in other affiliate programs for products and services reviewed on this site, including software subscriptions and digital products. All such relationships are governed by the same editorial principles described above. Affiliate links are identified with "sponsored" rel attributes on links and noted with disclosure language near product CTAs.
          </p>

          <h2>Sponsored Content</h2>
          <p>
            Occasionally, we may publish sponsored content — articles produced in paid partnership with brands. All sponsored content is clearly labeled as "Sponsored" at the top of the article. Sponsored content represents the brand's views and is editorially distinct from our independent reviews.
          </p>

          <h2>Price Accuracy</h2>
          <p>
            Product prices quoted on this site are accurate as of the date noted on each article but may change. Always verify current pricing on the retailer's website before purchasing.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our affiliate relationships or editorial policies? <Link href="/contact">Contact us</Link> — we're happy to answer them.
          </p>
        </div>
      </div>
    </>
  )
}
