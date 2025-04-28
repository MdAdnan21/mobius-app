/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0649E7", // Primary blue background
        secondary: "#022183", // Dark blue secondary
      },
    },
  },
  plugins: [],
};
