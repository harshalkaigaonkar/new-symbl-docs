/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
      {
        source: '/docs/introduction',
        destination: '/docs',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
