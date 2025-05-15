import Link from 'next/link'
import { motion } from 'framer-motion'

type ServiceCardProps = {
  title: string
  description: string
  link: string
  icon?: React.ReactNode
}

export default function ServiceCard({ title, description, link, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition group">
      <div className="text-primary mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-montserrat group-hover:text-primary transition">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link href={link} className="text-secondary font-bold text-sm hover:underline">
        Read More →
      </Link>
    </div>
  )
  
}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition relative overflow-hidden"
>
  {/* Glow Frame */}
  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-4 group-hover:ring-secondary/30 transition-all" />
  {/* Content here... */}
</motion.div>