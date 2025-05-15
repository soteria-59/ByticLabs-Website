/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      // Add any external domains for images here (e.g., CDN or external APIs)
      'images.unsplash.com',
      'cdn.jsdelivr.net'
    ],
  },
  experimental: {
    appDir: true, // Enable the `/app` directory structure
  },
}

module.exports = nextConfig