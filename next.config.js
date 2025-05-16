/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any other image domains you use
  },
  typescript: {
    ignoreBuildErrors: false, // Ensure type checking during build
  },
}

module.exports = nextConfig