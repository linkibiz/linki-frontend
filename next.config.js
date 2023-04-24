/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:id',
        destination: '/:id/poliza',
        permanent: true,
      },
      {
        source: '/:id/perfil',
        destination: '/:id/poliza',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
