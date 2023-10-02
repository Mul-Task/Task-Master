/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'primary': '#22A5EF',
            'secondary': {
                100: '#F5F4F4',
                200: '#fcfcfc',
                300: '#6F6F6F'
            }
        },
    },
  },
  plugins: [],
}