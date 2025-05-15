'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }

  ]

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="absolute w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-white/10 text-white">
        <Link href="/" className="text-2xl font-bold font-montserrat">
          Bytic<span className="text-secondary">Labs</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 font-inter text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-secondary transition ${
                  pathname === link.href.split('#')[0] ? 'text-secondary font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg font-inter">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
