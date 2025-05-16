import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
export interface BlogPost {
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  slug?: string;
}

export const metadata = {
  title: 'Blog | ByticLabs',
  description: 'Latest insights and updates from ByticLabs',
}

export default function BlogIndexPage() {
  const blogDir = path.join(process.cwd(), 'src/content/blog')

  if (!fs.existsSync(blogDir)) {
    return (
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary">Blog</h1>
        <p className="text-gray-600">No blog posts found.</p>
      </main>
    )
  }

  const files = fs.readdirSync(blogDir)

  const posts: BlogPost[] = files
    .map((filename) => {
      const filePath = path.join(blogDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      return {
        ...(data as BlogPost),
        slug: filename.replace('.md', ''),
      }
    })
    .filter((post) => post.title && post.date) // Ensure required metadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8 text-primary">ByticLabs Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-2 font-montserrat">
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary hover:text-secondary transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <time className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString()}
            </time>
            {post.excerpt && (
              <p className="mt-4 text-gray-700 font-inter">{post.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </main>
  )
}
