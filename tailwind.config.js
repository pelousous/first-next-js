/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo2)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

