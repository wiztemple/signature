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
          2: '#6c1d45',
          3: '#8C2E5E'
        },
        gold: '#1f190f',
        alternate: '#101828',
        midblack: '#3E4552',
        lightgrey: '#f9fafb'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

