/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'cdn.sanity.io'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
