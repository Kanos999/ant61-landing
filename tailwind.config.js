/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        "ant-yellow": "rgb(255, 204, 51)",
        "ant-navy": "#2e2f41",
        "ant-gray": "#3c3c3c",
        "ant-orange": "#be6e46"
      }
    },
  },
  plugins: [],
}

