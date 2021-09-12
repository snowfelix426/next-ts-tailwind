module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-golden': '#7b6c63',
        'light-grey': '#949494',
        'dark-grey': '#363636'
      },
      backgroundColor: {
        primary: '#26231F',
        secondary: '#303030',
        'dark-level-1': '#222',
      },
      zIndex: {
        1000: 1000,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
