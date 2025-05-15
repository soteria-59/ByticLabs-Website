import { services } from '@/lib/servicesData'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesPage() {
  return (
    <main className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold font-montserrat text-primary mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            description={service.description}
            link={service.link}
            icon={service.icon}
          />
        ))}
      </div>
    </main>
  )
}
