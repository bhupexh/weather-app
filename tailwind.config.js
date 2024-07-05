/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'day': "url('../assets/day.jpg')",
        'night': "url('../assets/night.jpg')",
      }
    },
  },
  plugins: [],
}