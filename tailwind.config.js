/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        priColor: "#FFA500",
        secColor: "#ffb52b",
      },
      fontFamily: {
        K2D: "K2D",
        inter: "Inter",
      },
      width: {
        1200: "1200px",
      },
    },
  },
  plugins: [require("daisyui")],
};
