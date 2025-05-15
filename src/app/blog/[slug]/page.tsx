import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const files = fs.readdirSync('src/content/blog')
  return files.map((file) => ({ slug: file.replace('.md', '') }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join('src/content/blog', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <main className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold font-montserrat text-primary mb-4">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{data.date}</p>
      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  )
}
