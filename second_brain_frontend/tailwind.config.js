/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          600:"#5046E4",
          400:"#5B57B2",
          300:"#E0E6FE",
        },
        gray:{
          200:"#F9FAFB",
          
        }
      }
    },
  },
  plugins: [],
}