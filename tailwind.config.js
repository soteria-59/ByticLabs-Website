/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx.public/index.html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',      // Deep Blue
        secondary: '#2DD4BF',    // Neon Teal
        accent: '#E11D48',       // Warm Red
      },
    },
  },
  plugins: [],
}