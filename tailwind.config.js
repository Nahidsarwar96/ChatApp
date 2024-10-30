/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryAuthColor: '#11175D',
        primaryColor: '#5F35F5',
        secondaryAuthColor: 'rgba(0, 0, 0, 0.42)'

      },
      fontFamily: {
        Nunito: ["Nunito", "sans- serif"],
      }
    },
  },
  plugins: [],
}