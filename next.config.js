const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    domains: ["media.graphassets.com"],
  },
  i18n,
  async redirects() {
    return [
      {
        source: "/social/:name",
        destination: "/api/social/:name",
        permanent: true,
      },
    ];
  },
};
