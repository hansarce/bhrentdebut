/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'first-pic': "url('.\src\img\firstpic.jpg')",
      }
    },
  },
  plugins: [],
}