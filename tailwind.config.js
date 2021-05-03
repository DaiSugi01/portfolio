module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main': '#212529',
        'sub-main': '#282D32',
      },
      height: {
        'main': 'calc(100vh - 3.5rem)',
        '400vh': '400vh',
      },
      minHeight: {
        'main': 'calc(100vh - 3.5rem)',
      },
      width: {
        'main': 'calc(100vw - 8rem)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
