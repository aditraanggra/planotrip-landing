module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        17: '4.25rem',
      },
      colors: {
        secondary: '#2F80ED',
        primary: '#27AE60',
        textColor: '#485A73',
      },
      fontFamily: {
        body: ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
