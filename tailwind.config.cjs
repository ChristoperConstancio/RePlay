/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily : {
        'Righteous': ['Righteous', 'sans-serif'],
        'Prompt' : ['Prompt', 'sans-serif']
      },
      coiors: {
        'yellowlight' : '#fdfc47',
        'greenlight' : '#24fe41'
      }
    },
  },
  plugins: [],
}
