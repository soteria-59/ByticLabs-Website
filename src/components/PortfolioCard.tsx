import Image from 'next/image'

type Props = {
  title: string
  description: string
  image: string
  status: 'In Progress' | 'Live'
}

export default function PortfolioCard({ title, description, image, status }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold font-montserrat">{title}</h3>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              status === 'In Progress'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
