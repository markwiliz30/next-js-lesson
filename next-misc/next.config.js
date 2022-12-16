/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      // sample redirect
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig