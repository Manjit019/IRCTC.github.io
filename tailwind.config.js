/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        "poppins":['poppins','sans-serif']
      },
      screens:{
        'mobile':'440px'
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

