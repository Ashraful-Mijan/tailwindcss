module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    container: {
      center: true
    }
  }
}

// module.exports = {
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem'
//     },
//   },
// }