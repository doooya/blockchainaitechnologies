import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import EmailCapture from '../../components/EmailCapture'
import { getArticlesByCategory, CATEGORIES } from '../../lib/articles'

export default function CategoryPage({ category, articles }) {
  const catInfo = CATEGORIES.find((c) => c.slug === category)

  return (
    <>
      <SEOHead
        title={catInfo ? `Best ${catInfo.label} Reviews & Guides` : `${category} Articles`}
        description={catInfo?.description || `Expert reviews and comparisons in the ${category} category.`}
        canonical={`/categories/${category}`}
      />

      {/* Header */}
      <div className="bg-gradient-to-b from-primary-50 to-white border-b border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {catInfo && <div className="text-5xl mb-4">{catInfo.icon}</div>}
          <h1 className="font-heading text-4xl font-extrabold text-gray-900 mb-3">
            {catInfo?.label || category.replace(/-/g, ' ')}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {catInfo?.description || `All articles in the ${category} category`}
          </p>
          <p className="text-sm text-gray-400 mt-3">{articles.length} article{articles.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles yet in this category.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon — we're writing more!</p>
          </div>
        )}

        <div className="mt-12">
          <EmailCapture variant="banner" />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: CATEGORIES.map((c) => ({ params: { category: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = getArticlesByCategory(params.category)
  return { props: { category: params.category, articles } }
}
