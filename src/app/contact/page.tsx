'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('success') // Replace with actual logic or integration later
  }

  return (
    <main className="py-20 px-6 md:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-primary">
          Contact Us
        </h1>
        <p className="text-gray-600 font-inter mt-4">
          Let’s discuss your project, partnership, or idea.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="text-gray-800 font-inter space-y-4">
          <h3 className="font-bold text-lg text-secondary">Our Office</h3>
          <p>Moi Avenue<br />Nairobi, Kenya</p>

          <h3 className="font-bold text-lg text-secondary">Email</h3>
          <p>info.byticlabs@gmai.com</p>

          <h3 className="font-bold text-lg text-secondary">Phone</h3>
          <p>+254 731 060 641</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-sm">Name</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-sm">Email</label>
            <input type="email" required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-sm">Message</label>
            <textarea rows={4} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          <button
            type="submit"
            className="bg-secondary text-black font-bold py-2 px-6 rounded-md hover:bg-accent transition"
          >
            Send Message
          </button>

          {status === 'success' && (
            <p className="text-green-600 font-semibold mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>
    </main>
  )
}
