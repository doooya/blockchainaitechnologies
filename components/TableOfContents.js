import { useEffect, useState } from 'react'

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    headings?.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length === 0) return null

  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-8 sticky top-24">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Table of Contents</p>
      <ol className="space-y-0.5">
        {headings.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? 'ml-3' : ''}>
            <a
              href={`#${id}`}
              className={`toc-link ${activeId === id ? '!text-primary-600 !border-primary-500 font-medium' : ''}`}
            >
              {level === 3 && <span className="mr-1 text-gray-300">└</span>}
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
