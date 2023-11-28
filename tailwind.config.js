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
        "pink" : "#F41B9F",
        "gold": "#FF9C1C",
        "red" : "#ff0000",
        "green" : "#7CC511",
        "orchid": "#DFECCD"
      }
    },
  },
  
  plugins: [],
}