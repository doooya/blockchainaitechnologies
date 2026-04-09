/** @type {import('next').GetStaticProps} */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export function getAllArticleSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => ({ params: { slug: fileName.replace(/\.md$/, '') } }))
}

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticles = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)
      return {
        slug,
        readingTime: stats.text,
        ...data,
      }
    })
  return allArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)
  return {
    slug,
    content,
    readingTime: stats.text,
    ...data,
  }
}

export function getArticlesByCategory(category) {
  return getAllArticles().filter(
    (a) => a.category?.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedArticles(currentSlug, category, limit = 3) {
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit)
}

export function getAllCategories() {
  const articles = getAllArticles()
  const categoryMap = {}
  articles.forEach((a) => {
    if (a.category) {
      if (!categoryMap[a.category]) {
        categoryMap[a.category] = { name: a.category, count: 0, articles: [] }
      }
      categoryMap[a.category].count++
      categoryMap[a.category].articles.push(a)
    }
  })
  return Object.values(categoryMap)
}

export const CATEGORIES = [
  { slug: 'ai-tools', label: 'AI Tools', description: 'Reviews and comparisons of the best artificial intelligence tools and software', icon: '🤖', color: 'bg-violet-100 text-violet-800' },
  { slug: 'blockchain', label: 'Blockchain', description: 'Hardware wallets, DeFi tools, NFT gadgets, and crypto infrastructure', icon: '⛓️', color: 'bg-blue-100 text-blue-800' },
  { slug: 'ai-gadgets', label: 'AI Gadgets', description: 'Smart hardware powered by artificial intelligence for home and work', icon: '📡', color: 'bg-green-100 text-green-800' },
  { slug: 'smart-home', label: 'Smart Home', description: 'AI-powered home automation, security, and voice assistant ecosystems', icon: '🏠', color: 'bg-amber-100 text-amber-800' },
  { slug: 'developer-tools', label: 'Dev Tools', description: 'AI coding assistants, blockchain dev environments, and automation platforms', icon: '💻', color: 'bg-rose-100 text-rose-800' },
  { slug: 'guides', label: 'Guides', description: 'Step-by-step tutorials on AI, blockchain, and emerging technologies', icon: '📖', color: 'bg-teal-100 text-teal-800' },
]
