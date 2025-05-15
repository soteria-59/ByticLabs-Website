import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Bytic<span className="text-secondary">Labs</span>
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            Revolutionizing Tech in Kenya. AI-infused. Locally built. Globally minded.
          </p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ByticLabs. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-secondary">Home</Link></li>
            <li><Link href="/about" className="hover:text-secondary">About</Link></li>
            <li><Link href="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-secondary">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-sm text-gray-400">123 Innovation Avenue, Nairobi, Kenya</p>
          <p className="text-sm text-gray-400 mt-2">Email: info@byticlabs.co.ke</p>
          <p className="text-sm text-gray-400">Phone: +254 700 123 456</p>
        </div>
      </div>
    </footer>
  )
}
