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
          950: "#001F15",
          900: "#002F1F",
          800: "#003D2B"
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
        soft: "0 24px 80px rgba(0, 31, 21, 0.14)",
        glow: "0 0 40px rgba(212, 175, 55, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
