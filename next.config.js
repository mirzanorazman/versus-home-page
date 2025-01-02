/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['vercel.com'],
  },
};

module.exports = nextConfig;
