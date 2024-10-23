/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      playwrite: ["Playwrite GB S", "serif"],
      caveat: ["Caveat", "serif"],
    },
    extend: {
      keyframes: {
        "fade-slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-1rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(1rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-in-top": {
          "0%": { opacity: "0", transform: "translateY(-10rem)" },
          "100%": { opacity: "100", tranform: "translateY(0)" },
        },
        "custom-stop": {
          "0%": { opacity: "0", transform: "translateX(-10rem)" },
          "30%": { transform: "translateX(0%)" },
          "30%": { transform: "rotateZ(30deg)" },
          "100%": { opacity: "1", transform: "rotateZ(0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-slide-in-left": "fade-slide-in-left 1s ease-out",
        "fade-slide-in-right": "fade-slide-in-right 1s ease-out",
        "fade-slide-in-top": "fade-slide-in-top 1s ease-out",
        "custom-stop": "custom-stop 1s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
