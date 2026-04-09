import Link from 'next/link'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="This page doesn't exist." />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="font-heading text-4xl font-extrabold text-gray-900 mb-3">Page Not Found</h1>
          <p className="text-gray-500 text-lg mb-8">The page you're looking for has moved or doesn't exist.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">← Go Home</Link>
            <Link href="/articles" className="btn-secondary">Browse Articles</Link>
          </div>
        </div>
      </div>
    </>
  )
}
