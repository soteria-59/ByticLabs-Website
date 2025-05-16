import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'
export interface BlogPost {
  title: string
  date: string
  excerpt?: string
  author?: string
  slug?: string
}

export const generateStaticParams = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/blog'))
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), 'src/content/blog', `${params.slug}.md`)

    if (!fs.existsSync(filePath)) {
      notFound()
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    const blogData = data as BlogPost

    return (
      <article className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold font-montserrat text-primary mb-4">
            {blogData.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={blogData.date}>
              {new Date(blogData.date).toLocaleDateString()}
            </time>
            {blogData.author && (
              <span className="text-gray-600">By {blogData.author}</span>
            )}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}
