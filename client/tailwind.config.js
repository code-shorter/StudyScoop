/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smobile': '320px',
      'lmobile': '375px',
      'mobile': '425px',
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px',
    },
    minWidth: {
      '130': '130px',
      '150': '150px',
      '170': '170px',
    },
    minHeight: {
      '300': '300px',
      '330': '330px',
      '370': '370px',
    },
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 0px #00000052',
      }
    },
  },
  plugins: [],
}

