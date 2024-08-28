import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit:['Outfit','sans-serif']
      },
      colors:{
        bgImageProduct:'#F6F6F6'
      }
    },
  },
  plugins: [],
};
export default config;
