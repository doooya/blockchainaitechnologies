import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import Link from 'next/link'
import { format } from 'date-fns'
import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import EmailCapture from '../../components/EmailCapture'
import ProductCard from '../../components/ProductCard'
import ComparisonTable from '../../components/ComparisonTable'
import TableOfContents from '../../components/TableOfContents'
import { getAllArticleSlugs, getArticleBySlug, getRelatedArticles } from '../../lib/articles'
import { buildArticleSchema, buildFAQSchema } from '../../lib/seo'

const MDX_COMPONENTS = {
  ProductCard,
  ComparisonTable,
  EmailCapture,
  // Custom overrides for markdown elements
  a: ({ href, children }) => (
    href?.startsWith('http') ? (
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    ) : (
      <Link href={href}>{children}</Link>
    )
  ),
  // Callout boxes
  Callout: ({ type = 'info', children }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-400 text-blue-800',
      warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
      success: 'bg-green-50 border-green-400 text-green-800',
      tip: 'bg-violet-50 border-violet-400 text-violet-800',
    }
    return (
      <div className={`border-l-4 rounded-r-lg p-4 my-4 ${styles[type] || styles.info}`}>
        {children}
      </div>
    )
  },
  BestPick: ({ product, reason }) => (
    <div className="bg-gradient-to-r from-accent-500 to-green-600 text-white rounded-xl p-5 my-6">
      <p className="text-xs font-bold uppercase tracking-widest mb-1 text-green-100">⭐ Editor's Best Pick</p>
      <p className="font-heading font-bold text-xl mb-1">{product}</p>
      <p className="text-green-100 text-sm">{reason}</p>
    </div>
  ),
}

function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].replace(/\*\*/g, '').replace(/`/g, '')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    headings.push({ id, text, level })
  }
  return headings
}

export default function ArticlePage({ article, mdxSource, relatedArticles, headings }) {
  const { title, excerpt, date, updatedDate, category, readingTime, intent, faqs, products } = article

  const articleSchema = buildArticleSchema({
    title,
    description: excerpt,
    canonical: `/articles/${article.slug}`,
    publishedTime: date,
    modifiedTime: updatedDate || date,
    category,
  })

  const faqSchema = faqs && faqs.length > 0 ? buildFAQSchema(faqs) : null

  return (
    <>
      <SEOHead
        title={title}
        description={excerpt}
        canonical={`/articles/${article.slug}`}
        article
        publishedTime={date}
        modifiedTime={updatedDate || date}
        structuredData={articleSchema}
        faqStructuredData={faqSchema}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-2.5">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 text-xs text-gray-500 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/articles" className="hover:text-primary-600 transition-colors">Articles</Link>
          <span>›</span>
          {category && (
            <>
              <Link href={`/categories/${category}`} className="hover:text-primary-600 transition-colors capitalize">
                {category.replace(/-/g, ' ')}
              </Link>
              <span>›</span>
            </>
          )}
          <span className="text-gray-700 font-medium truncate max-w-xs">{title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            {category && (
              <Link href={`/categories/${category}`} className="text-xs font-semibold text-primary-600 uppercase tracking-wider hover:text-primary-700 transition-colors">
                {category.replace(/-/g, ' ')}
              </Link>
            )}
            {intent && <span className={`badge badge-${intent}`}>{intent}</span>}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {title}
          </h1>
          {excerpt && (
            <p className="text-lg text-gray-500 leading-relaxed mb-6">{excerpt}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>📅 Published {date ? format(new Date(date), 'MMMM d, yyyy') : ''}</span>
            {updatedDate && <span>🔄 Updated {format(new Date(updatedDate), 'MMMM d, yyyy')}</span>}
            <span>⏱ {readingTime}</span>
            <span className="ml-auto text-xs text-gray-400">Affiliate links may earn us a commission — <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">disclosure</Link></span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          {/* Article body */}
          <article className="prose prose-gray max-w-none prose-lg">
            <MDXRemote {...mdxSource} components={MDX_COMPONENTS} />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents headings={headings} />
              <EmailCapture
                title="Get weekly tech deals"
                subtitle="AI tools, blockchain gear, and gadget reviews in your inbox."
              />
              {/* Quick Summary Card */}
              {products && products.length > 0 && (
                <div className="card p-5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Quick Product Links</p>
                  <ul className="space-y-2">
                    {products.slice(0, 5).map((p, i) => (
                      <li key={i}>
                        <a
                          href={p.affiliateLink || '#'}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <span className="text-gray-400">#{i + 1}</span>
                          <span className="hover:underline">{p.name}</span>
                          {p.bestPick && <span className="text-xs text-accent-500">⭐</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="section-heading">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllArticleSlugs()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug)
  const mdxSource = await serialize(article.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  })
  const relatedArticles = getRelatedArticles(params.slug, article.category)
  const headings = extractHeadings(article.content)

  return {
    props: {
      article,
      mdxSource,
      relatedArticles,
      headings,
    },
  }
}
