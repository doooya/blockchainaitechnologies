import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import ArticleCard from '../components/ArticleCard'
import EmailCapture from '../components/EmailCapture'
import { getAllArticles, CATEGORIES } from '../lib/articles'
import { buildWebsiteSchema } from '../lib/seo'

export default function HomePage({ featuredArticles, recentArticles }) {
  return (
    <>
      <SEOHead
        title="Best AI Tools, Blockchain Hardware & Emerging Tech Reviews"
        description="Expert reviews, comparisons, and buying guides for AI tools, blockchain hardware wallets, AI gadgets, and emerging technology products. Make smarter tech decisions."
        canonical="/"
        structuredData={buildWebsiteSchema()}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Trusted by 10,000+ tech enthusiasts
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            The Smartest Way to Buy<br />
            <span className="text-primary-300">AI & Blockchain</span> Technology
          </h1>
          <p className="text-primary-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            In-depth reviews, honest comparisons, and expert buying guides for AI tools, blockchain hardware, smart gadgets, and emerging tech — written for real people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/articles" className="btn-primary">
              🔍 Browse All Reviews
            </Link>
            <Link href="/categories/ai-tools" className="btn-secondary !text-white !border-white/40 hover:!bg-white/10">
              🤖 Top AI Tools →
            </Link>
          </div>
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { num: '200+', label: 'Products Reviewed' },
              { num: '50+', label: 'In-Depth Guides' },
              { num: '10K+', label: 'Monthly Readers' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-heading font-extrabold text-white">{s.num}</div>
                <div className="text-xs text-primary-300 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          {['✅ Independently Reviewed', '🔬 Research-Backed', '💰 No Paid Placements', '🔒 Transparent Affiliate Disclosures', '🤝 Reader-First Content'].map((t) => (
            <span key={t} className="font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-heading text-center">Explore by Category</h2>
        <p className="section-subheading text-center">Find exactly what you're looking for</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group card p-5 text-center hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h3 className="font-heading font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors">{cat.label}</h3>
              <p className="text-xs text-gray-400 mt-1 leading-snug line-clamp-2">{cat.description.split(' ').slice(0, 5).join(' ')}…</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="section-heading">Featured Reviews</h2>
          <p className="section-subheading">Our most comprehensive, up-to-date comparisons</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.slice(0, 2).map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>
      )}

      {/* Email Capture */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <EmailCapture variant="banner" />
      </section>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-heading !mb-1">Latest Articles</h2>
              <p className="text-gray-500 text-sm">Fresh reviews and guides from our team</p>
            </div>
            <Link href="/articles" className="text-primary-600 font-semibold text-sm hover:text-primary-700 inline-flex items-center gap-1">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Why Trust Us */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Why Trust Our Reviews?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: '🔬', title: 'Research-Driven', body: 'Every product recommendation is based on thorough research, user feedback analysis, and spec comparisons — not just manufacturer claims.' },
              { icon: '💰', title: 'No Pay-to-Play', body: 'We never accept payment to feature products. If a product earns a top ranking, it\'s because it genuinely earned it.' },
              { icon: '🔄', title: 'Regularly Updated', body: 'Technology moves fast. We update our reviews when new versions launch, prices change, or better alternatives emerge.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allArticles = getAllArticles()
  const featuredArticles = allArticles.filter((a) => a.featured)
  const recentArticles = allArticles.slice(0, 6)
  return {
    props: { featuredArticles, recentArticles },
  }
}
