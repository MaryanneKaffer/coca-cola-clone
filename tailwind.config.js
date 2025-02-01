const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/divider.js",
  ],
  darkMode: "class",
  plugins: [heroui()],
};