import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.mp4')",
        // "contact": "url('/contact.jpg')",
        focus: "url('../assets/focus.jpg')",
        participation1: "url('/participation1.jpg')",
        participation2: "url('/participation2.jpg')",
        participation3: "url('/participation3.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
