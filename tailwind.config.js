/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          1000: 'hsl(209, 23%, 22%)',
          1100: 'hsl(207, 26%, 17%)',
          1200: 'hsl(200, 15%, 8%)',
        },
        gray: {
          1000: 'hsl(0, 0%, 52%)',
          1100: 'hsl(0, 0%, 98%)',
        },
      },
    },
  },
  plugins: [],
};
