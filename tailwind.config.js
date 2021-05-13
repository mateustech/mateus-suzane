module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#60001c",
      },
      fontFamily: {
        primary: ['Great Vibes'],
        secondary: ['Cookie'],
        terciary: ['Great Vibes'],
      },
    },
    
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
