const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./public/locales"),
};
