/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        priColor: "#FFA500",
        secColor: "#EA9500",
      },
      fontFamily: {
        K2D: "K2D",
      },
    },
  },
  plugins: [require("daisyui")],
};
