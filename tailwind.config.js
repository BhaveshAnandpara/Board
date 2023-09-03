/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'secondary':'#F8FAFF'
      
    },
    backgroundColor:{
      'primary' : 'linear-gradient(180deg, #4285F4 0%, #286DE0 100%)',
      'secondary':'#F8FAFF'
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Lato', 'sans-serif'],
      open_sans: ['Open Sans'],
      figtree: ['Figtree', 'sans-serif'],
    },
    fontSize:{
      title : '36px',
      subtitle : '24px',
      card_title : '18px'
    },
    fontWeight:{
      bold : '700',
      normal :'400'
    },
    extend: {
      backgroundImage: {

      },
    },
  },
  plugins: [],
}
