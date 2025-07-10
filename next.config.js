/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to prevent double renders
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
  },
  // Recommended for static exports
  trailingSlash: true,
}

module.exports = nextConfig
