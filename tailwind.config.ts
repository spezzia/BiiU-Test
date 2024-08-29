import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        bgImageProduct: '#F6F6F6',
        bgHeaders: '#CBD5E1',
        bgBadge: '#EB6383',
        buttonPrimary: '#059669',
        buttonDark: '#000000',
        buttonSecondary: '#EB6383',
        textPrimary: '#334155',
        textSecondary: '#10B981',
        textDark: '#0F172A',
        textDisable: '#767676',
        borderPrimary: '#767676',
        iconPrimary: '#94A3B8',
      }
    },
  },
  plugins: [],
};
export default config;
