/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      height: {
        560: '28rem'
      },
      
      colors: {
        purplePrimary: '#C67EFF',
        purpleSecond: '#7743DB',
        purpleThird: '#5C24C8',
        purpleFourth: '#58158D',
        purpleFifth: '#310852',
        purpleSixth: '#682f8d',
      }

    },
  },
  plugins: [],
}
