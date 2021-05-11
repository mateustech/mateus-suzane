module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#800000",
      },
      fontFamily: {
        primary: ['Great Vibes'],
      },
    },
    
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
