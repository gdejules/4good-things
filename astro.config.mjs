// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "NeoSansPro",
      cssVariable: "--font-neo-sans",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/fonts/NeoSansProCyr-Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/fonts/NeoSansProCyr-Medium.woff2"],
            weight: "medium",
            style: "normal",
          },
          {
            src: ["./src/fonts/NeoSansProCyr-Bold.woff2"],
            weight: "bold",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "BobbyJonesSoft",
      cssVariable: "--font-bobby-jones",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/fonts/BobbyJonesSoft-Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
