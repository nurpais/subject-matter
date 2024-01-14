/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'subjectmatter.co.nz',
        port: '',
        pathname: '/img/works/**',
      },
    ],
  },
}

module.exports = nextConfig
