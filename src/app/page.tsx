import HeroCarousel from '@/components/HeroCarousel'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/servicesData'
import PortfolioCard from '@/components/PortfolioCard'
import { projects, Project } from '@/lib/projectsData'


export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <section className="py-20 px-6 md:px-16 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-inter">
            We provide tailored digital solutions for SMEs, enterprises, and governments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-16">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-6">
      Why It Matters
    </h2>
    <p className="text-gray-700 text-lg font-inter leading-relaxed mb-8">
      Kenya&#39;s tech revolution is here — and your business deserves to be at the front.
      ByticLabs helps SMEs, enterprises, and governments streamline operations, enhance
      security, and unlock innovation with AI-powered solutions tailored for our local market.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800 font-inter">
      <div>
        <h3 className="font-bold text-lg text-secondary mb-2">🔐 Secure Infrastructure</h3>
        <p>We protect your data and systems with smart security and 24/7 monitoring.</p>
      </div>
      <div>
        <h3 className="font-bold text-lg text-secondary mb-2">⚡ Business Efficiency</h3>
        <p>We automate operations and reduce manual processes for better productivity.</p>
      </div>
      <div>
        <h3 className="font-bold text-lg text-secondary mb-2">🌍 Kenyan Roots, Global Tech</h3>
        <p>We combine global expertise with deep local understanding to build lasting solutions.</p>
      </div>
    </div>
  </div>
</section>

{/* Portfolio Section */}
<section className="py-20 px-6 md:px-16 bg-gray-100" id="portfolio">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary">
      Our Portfolio
    </h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-inter">
      Take a look at our innovative and ongoing digital projects.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {projects.map((project: Project, index: number) => (
      <PortfolioCard
        key={index}
        title={project.title}
        description={project.description}
        image={project.image}
        status={project.status as 'In Progress' | 'Live'}
      />
    ))}
  </div>
</section>
    </main>
  )
}
import CTASection from '@/components/CTASection'
<CTASection />
