/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-condensed': ["Roboto Condensed", 'sans-serif'],
    },
    extend: {
      colors: {
        'sky-darker': '#2E2F41',
        'sky-darkest': '#252634',
        'tokens-surface': '#00000040',
        'neutral-alpha-11': "#F1F7FEB5",
        'neutral-alpha-10': '#D9EDFE25',
        'neutral-alpha-6': '#D6EBFD30',
        'neutral-alpha-5': '#D9EDFE25',
        'neutral-alpha-3': '#DDEAF814',
        'neutral-alpha-2': '#D8F4F609',
        'ant-yellow': '#FFCA16',
        'blue-10': '#3B9EFF',
        'warning-10': '#FF801F',
        'error-10': '#EC5A72',
        'accent-surface': '#F4D10016',
        'accent-alpha-11': '#FFCA16',
        'accent-alpha-10': '#F4D10016',
        'accent-alpha-8': '#FFAE3587',
        'accent-alpha-5': '#FD8B0041',
        'accent-alpha-3': '#FA820022',
        'cyan-alpha-3': '#00BEFD28',
        'cyan-alpha-11': '#52E1FEE5',
        'accent-11': '#FFCA16',
        'tokens-black-contrast': '#3C3C3C',
        'error-alpha-2': '#FE5A7F0E',
        'error-10': '#EC5A72',
        '--white-35': 'rgba(240, 240, 250, .35)',
        '--white-100': 'rgba(240, 240, 250, 1)',
      },
    },
  },
  plugins: [],
}

