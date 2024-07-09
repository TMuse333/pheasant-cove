/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'655px',
        md:'865px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily:{
        arima: ['"Arima Madras"', 'cursive'],
      }
    },
  },
  plugins: [],
}