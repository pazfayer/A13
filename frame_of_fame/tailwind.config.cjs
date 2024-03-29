module.exports = {
  content: ["./*.{html,js,ts}"],
  darkmode: false,
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
