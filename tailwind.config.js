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
          3: '#001122',
          4: '#666666',
          5: '#EAE7E1',
          6: '#E8E1C9',
          7: '#f9f5f8',
          8: '#f9fafb',
          9: '#fcf8fb',
          10: '#A61890',
          11: '#fff9fd',
          12: '#fff9f0'
        },
        hex: {
          1: '#5a193a',
          2: '#6c1d45',
          3: '#8C2E5E',
          4: '#fff3',
          5: '#b9965b1c',
          6: '#ffffff33',
          7: '#440b29',
          8: '#404040',
          9: '#555d6c',
          10: '#303343e',
          11: '#667084',
          12: '#f3e7ed',
          13: '#f5f5f5',
          14: '#ededed',
          15: '#ffe0f0',
        },
        gold: '#1f190f',
        alternate: '#101828',
        midblack: '#3E4552',
        lightgrey: '#f9fafb',
        bannerbg: '#fdf9f0',
        cardbg: '#fff5fa',
        primarygray: '#667084',
        primaryblack: '#0f1728',
        primaryyellow: '#b9975b',
        secondarygray: '#bbbbbb',
        uppergray: '#dddddd',
        cardbadge: '#f8efea',
        primaryblown: '#8a4224',
        secondarybrown: '#b05c37',
        pink: '#ffdbed',
        alternateblack: '#0c0c0c',
        dutyblack: '#040304',
        lightgold: '#ba975a',
        charcoal: '#4d4d4d'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      clipPath: {
        'half-circle': 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
      },
      screens: {
        xl: "1900px",
        sm: '540px',
      },
       backgroundColor: {
         shadowpink: 'rgb(243, 226, 235)',
         shadowbeige: 'rgb(236, 217, 207)'
      },
    },
  },
  plugins: [],
}

