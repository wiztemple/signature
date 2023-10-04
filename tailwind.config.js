/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          1: '#EAECF0',
          2: '#C5A4B5',
        },
        hex: {
          1: '#5a193a',
          2: '#6c1d45'
        },
        gold: '#1f190f'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

