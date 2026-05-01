/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      cream: "#EDE99A",
      orange: "#EA7601",
      green: "#258225",
      white: "#FFFFFF",
      black: "#000000",
      amber: colors.amber,
    },
  },
  plugins: [],
};
