module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'media', // or 'media' or 'class' or false to turn off dark mode
  theme: {
    extend: {
      fontFamily: {
        poppins: `"Poppins", sans-serif`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
