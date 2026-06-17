import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0B3F33",
          900: "#0E5A47",
          800: "#0B6B57"
        },
        royal: {
          700: "#1B4D8A",
          600: "#214E97"
        },
        gold: {
          500: "#D4AF37",
          400: "#C9A646"
        },
        ivory: "#F8F6F0",
        ink: "#111111",
        graphite: "#555555",
        whatsapp: "#25D366"
      },
      fontFamily: {
        serifDisplay: ["var(--font-playfair)"],
        sansBody: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(14, 90, 71, 0.18)",
        glow: "0 0 40px rgba(212, 175, 55, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
