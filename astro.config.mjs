// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "NeoSansPro",
      cssVariable: "--font-neo-sans",
      optimizedFallbacks: false,
      fallbacks: [
        "Segoe UI",
        "Trebuchet MS",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      options: {
        variants: [
          {
            src: ["./src/fonts/NeoSansProCyr-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/fonts/NeoSansProCyr-Medium.woff2"],
            weight: "500",
            style: "normal",
          },
          {
            src: ["./src/fonts/NeoSansProCyr-Bold.woff2"],
            weight: "800",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "BobbyJonesSoft",
      cssVariable: "--font-bobby-jones",
      optimizedFallbacks: false,
      fallbacks: ["Impact", "Comic Sans MS", "system-ui", "sans-serif"],
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
