export default function ComparisonTable({ products, columns }) {
  const defaultCols = columns || ['Product', 'Best For', 'Rating', 'Our Pick']
  const hasData = products && products.length > 0

  return (
    <div className="overflow-x-auto my-8 rounded-xl shadow-sm border border-gray-200">
      <table className="comparison-table">
        <thead>
          <tr>
            {defaultCols.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hasData ? products.map((p, i) => (
            <tr key={i} className={p.bestPick ? 'bg-green-50' : ''}>
              <td className="font-semibold text-gray-900">
                {p.bestPick && <span className="best-pick-badge mr-2">⭐</span>}
                {p.name}
              </td>
              <td className="text-gray-600">{p.idealFor || ''}</td>
              <td>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900">{p.rating}</span>
                  <span className="text-yellow-400 text-sm">★</span>
                </div>
              </td>
              <td>
                <a href={p.affiliateLink || '#'} target="_blank" rel="noopener noreferrer sponsored" style={{backgroundColor: '#4f46e5', color: '#ffffff', display: 'inline-flex', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', textDecoration: 'none'}}>
                  View Deal
                </a>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={4} className="text-center text-gray-400 py-8">No products listed yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}