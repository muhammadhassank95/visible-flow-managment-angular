/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#4D5891 !important' , // ntwrking //014a72
        'custom-primary-disabled': '#898989 !important',
        'custom-secondary': '#5F5F5F !important',
        'custom-red': '#e84721 !important',
        'custom-green': '#89b555!important',
      }
    },
  },
  plugins: [],
}
