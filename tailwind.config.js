const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.pink,
        secondary: colors.purple,
        background: colors.zinc,
      }
    },
  },
  plugins: [
    require("tailwindcss-text-fill-stroke")(),
    require("@tailwindcss/typography"),
  ],
};
