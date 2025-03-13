/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // For demo images
  },
  // Enable experimental features if needed
  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig