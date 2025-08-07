/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "fade-in-right": "fade-in-right 1s ease-out forwards",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [],
};
