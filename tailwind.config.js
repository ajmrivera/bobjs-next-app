/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "bob-main": "#FE5F55",
        "bob-secondary": "#DF507F",
        "bob-accent": "#AA5596",
        "bob-bg": "#FFEFEF"
      }
    },
  },
  plugins: [],
}
