'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/images/hero-slide1.jpg',
    title: 'Innovate with AI-Infused Solutions',
    subtitle: 'Empowering businesses through intelligent automation.',
    cta: 'Get a Free Consultation',
    link: '/contact',
  },
  {
    id: 2,
    image: '/images/hero-slide2.jpg',
    title: 'Secure Your Operations',
    subtitle: 'Advanced smart security systems powered by AI.',
    cta: 'Explore Security',
    link: '/services',
  },
  {
    id: 3,
    image: '/images/hero-slide3.jpg',
    title: 'Transform Digitally',
    subtitle: 'Custom web & software development for SMEs to governments.',
    cta: 'Our Services',
    link: '/services',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        className="object-cover brightness-[0.55] transition-all duration-1000 ease-in-out"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">{slide.title}</h1>
        <p className="text-lg md:text-2xl font-inter mb-6 max-w-2xl">{slide.subtitle}</p>
        <a
          href={slide.link}
          className="bg-secondary text-black font-bold px-6 py-3 rounded-xl hover:bg-accent transition-all"
        >
          {slide.cta}
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? 'bg-secondary' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
