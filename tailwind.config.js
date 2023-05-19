/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Hind Siliguri'],
      },
    },
  },
  daisyui: {
    themes: ["clight"],
  },
  plugins: [require("daisyui")],
}
