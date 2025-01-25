// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/divider.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      KometaBold: ['Kometa-Bld', 'sans-serif'],
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};