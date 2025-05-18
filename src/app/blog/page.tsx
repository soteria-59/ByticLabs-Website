import { motion } from 'framer-motion'; // Changed to named import
import Link from 'next/link';

export const metadata = {
  title: 'Coming Soon | ByticLabs',
  description: 'ByticLabs is coming soon with innovative AI, security, and automation solutions.',
};

export default function BlogIndexPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 md:px-12 text-center">
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="waveform-animation w-full h-1"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1E3A8A]/10 to-transparent pointer-events-none"></div>

        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[#1E3A8A] mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-inter max-w-2xl mx-auto mb-6">
          ByticLabs is preparing to launch innovative AI-driven solutions, smart security systems, and automation services. Stay tuned!
        </p>
        <div className="waveform-divider w-20 h-1 mx-auto mb-6 rounded-full"></div>
        <Link
          href="/contact"
          className="inline-block bg-[#E11D48] text-white font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          aria-label="Notify me when ByticLabs launches"
        >
          Notify Me
        </Link>
      </motion.div>
    </main>
  );
}
