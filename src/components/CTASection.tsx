import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-20 px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
          Ready to Revolutionize Your Tech Strategy?
        </h2>
        <p className="text-lg font-inter mb-8">
          Let’s build something powerful together. Talk to us about your needs in AI, security, software, or automation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-secondary text-black font-bold px-8 py-4 rounded-xl hover:bg-accent transition-all"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
