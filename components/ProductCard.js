export default function ProductCard({ product, rank }) {
  const { name, tagline, features, pros, cons, idealFor, whyItStands, rating, price, affiliateLink, bestPick } = product

  return (
    <div className={`product-card my-6 ${bestPick ? 'ring-2 ring-accent-500' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {rank && (
            <span className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
              #{rank}
            </span>
          )}
          <div>
            <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight">{name}</h3>
            {tagline && <p className="text-sm text-gray-500 mt-0.5">{tagline}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {bestPick && <span className="best-pick-badge">⭐ Best Pick</span>}
          {rating && (
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{rating}/5</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Price */}
      {price && (
        <div className="text-sm text-gray-700">
          <span className="font-semibold">Price range:</span> {price}
        </div>
      )}

      {/* Key features */}
      {features && features.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Key Features</p>
          <ul className="space-y-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary-500 mt-0.5 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pros/Cons */}
      {(pros || cons) && (
        <div className="pros-cons-grid !my-3">
          {pros && (
            <div className="pros-box">
              <p className="text-xs font-bold text-green-800 uppercase tracking-wider mb-2">✅ Pros</p>
              <ul className="space-y-1">
                {pros.map((p, i) => <li key={i} className="text-xs text-green-700">{p}</li>)}
              </ul>
            </div>
          )}
          {cons && (
            <div className="cons-box">
              <p className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2">❌ Cons</p>
              <ul className="space-y-1">
                {cons.map((c, i) => <li key={i} className="text-xs text-red-700">{c}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Ideal For + Why It Stands */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        {idealFor && (
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="font-semibold text-blue-800 text-xs mb-1">👤 Ideal For</p>
            <p className="text-blue-700 text-xs">{idealFor}</p>
          </div>
        )}
        {whyItStands && (
          <div className="bg-violet-50 rounded-lg p-3">
            <p className="font-semibold text-violet-800 text-xs mb-1">💡 Why It Stands Out</p>
            <p className="text-violet-700 text-xs">{whyItStands}</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <a
        href={affiliateLink || '#'}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="affiliate-btn"
      >
        🛒 Check Price on Amazon
      </a>
      <p className="text-xs text-center text-gray-400">
        As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </div>
  )
}
