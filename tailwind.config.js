/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#2DD4BF', // Neon Teal
        accent: '#E11D48', // Warm Red
      },
    },
  },
  plugins: [],
};