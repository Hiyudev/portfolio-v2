const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    domains: ["media.graphassets.com", "cdn.hashnode.com"],
  },
  i18n,
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "https://hiyu.hashnode.dev/:slug",
        permanent: true,
      },
      {
        source: "/social/:name",
        destination: "/api/social/:name",
        permanent: true,
        locale: false,
      },
    ];
  },
};
