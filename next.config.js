module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  async redirects() {
    return [
      {
        source: '/social/:name',
        destination: '/api/social/:name',
        permanent: true,
      },
    ]
  },
}
