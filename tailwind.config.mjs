/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      cream: "#EDE99A",
      orange: "#EA7601",
      green: "#258225",
      honey: "#ff9c00",
      blue: "#0037ff",
      red: "#ed0a0a",
      white: "#FFFFFF",
      dark: "#1c1917",
      lightGreen: "#93b493",
      lightOrange: "#e8ad73",
      lightBackground: "#f8fafc",
    },
  },
  plugins: [],
};
