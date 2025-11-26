/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Fix workspace root warning
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
