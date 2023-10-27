/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "426px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {colors: {
      "dark-purple": "#081A51",
      "light-white": "rgba(255,255,255,0.17)",
    },},
  },
  plugins: [],
};
