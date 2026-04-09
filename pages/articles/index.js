import { useState } from 'react'
import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import { getAllArticles, CATEGORIES } from '../../lib/articles'

export default function ArticlesIndex({ articles }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeIntent, setActiveIntent] = useState('all')

  const filtered = articles.filter((a) => {
    const matchSearch = search.trim() === '' ||
      a.title?.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt?.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === 'all' || a.category === activeCategory
    const matchIntent = activeIntent === 'all' || a.intent === activeIntent
    return matchSearch && matchCategory && matchIntent
  })

  return (
    <>
      <SEOHead
        title="All AI & Blockchain Tech Articles"
        description="Browse all our reviews, comparisons, and guides on AI tools, blockchain hardware, smart gadgets, and emerging tech. Filter by category or search for a specific product."
        canonical="/articles"
      />

      <div className="bg-gradient-to-b from-primary-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-gray-900 mb-3">All Articles</h1>
          <p className="text-gray-500 text-lg mb-6">Reviews, comparisons, and guides on AI & blockchain technology</p>
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles, products, categories…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider self-center mr-1">Category:</span>
            {[{ slug: 'all', label: 'All' }, ...CATEGORIES].map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label || cat.slug}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider self-center mr-1">Intent:</span>
            {['all', 'informational', 'commercial', 'transactional'].map((intent) => (
              <button
                key={intent}
                onClick={() => setActiveIntent(intent)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                  activeIntent === intent
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing <strong>{filtered.length}</strong> of <strong>{articles.length}</strong> articles
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-2">No articles found</p>
            <p className="text-gray-400 text-sm">Try a different search or category filter</p>
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()
  return { props: { articles } }
}
