import Link from 'next/link'
import { format } from 'date-fns'

const INTENT_COLORS = {
  informational: 'badge-informational',
  commercial: 'badge-commercial',
  transactional: 'badge-transactional',
}

export default function ArticleCard({ article, featured = false }) {
  const { slug, title, excerpt, date, category, readingTime, intent, featuredImage } = article

  return (
    <Link href={`/articles/${slug}`} className="group block">
      <article className={`card overflow-hidden h-full flex flex-col ${featured ? 'md:flex-row' : ''}`}>
        {/* Image placeholder */}
        <div className={`relative bg-gradient-to-br from-primary-500 to-primary-800 ${featured ? 'md:w-2/5 min-h-[200px]' : 'h-44'} flex items-center justify-center overflow-hidden flex-shrink-0`}>
          {featuredImage ? (
            <img
              src={featuredImage}
              alt={`Featured image for ${title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="text-center text-white p-4">
              <div className="text-4xl mb-2 opacity-60">
                {category === 'ai-tools' ? '🤖' :
                 category === 'blockchain' ? '⛓️' :
                 category === 'ai-gadgets' ? '📡' :
                 category === 'smart-home' ? '🏠' :
                 category === 'developer-tools' ? '💻' : '📖'}
              </div>
              <p className="text-xs font-medium opacity-70 uppercase tracking-wider">{category?.replace(/-/g, ' ')}</p>
            </div>
          )}
          {intent && (
            <span className={`absolute top-3 left-3 ${INTENT_COLORS[intent] || 'badge-informational'}`}>
              {intent}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-2 flex-grow">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="font-medium text-primary-600 uppercase tracking-wide text-xs">
              {category?.replace(/-/g, ' ')}
            </span>
            <span>·</span>
            <time dateTime={date}>{date ? format(new Date(date), 'MMM d, yyyy') : ''}</time>
            <span>·</span>
            <span>{readingTime}</span>
          </div>

          <h2 className={`font-heading font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug ${featured ? 'text-xl' : 'text-base'}`}>
            {title}
          </h2>

          {excerpt && (
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{excerpt}</p>
          )}

          <div className="mt-auto pt-2">
            <span className="text-primary-600 text-sm font-semibold group-hover:text-primary-700 inline-flex items-center gap-1">
              Read article <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
