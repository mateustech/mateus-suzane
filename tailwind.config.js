module.exports = {
  purge: ['./pages/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#60001c",
      },
      fontFamily: {
        primary: ['Cookie']
      },
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
