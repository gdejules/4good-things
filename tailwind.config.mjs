/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      cream: "#EDE99A",
      orange: "#EA7601",
      green: "#258225",
    },
    extend: {
      fontFamily: {
        display: ['"Ocean Six Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
