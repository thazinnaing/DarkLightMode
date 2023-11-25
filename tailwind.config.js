/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dark": "#202225",
        "light": "#fff5ee",
      }
    },
  },
  
  plugins: [],
}