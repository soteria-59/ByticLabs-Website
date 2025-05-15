import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const files = fs.readdirSync('src/content/blog')
  const posts = files.map((file) => {
    const content = fs.readFileSync(`src/content/blog/${file}`, 'utf-8')
    const { data } = matter(content)
    return {
      slug: file.replace('.md', ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    }
  })

  return (
    <main className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold font-montserrat text-primary mb-10">Insights & Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-2xl font-semibold text-primary">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <p className="text-gray-700 mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-secondary font-bold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
