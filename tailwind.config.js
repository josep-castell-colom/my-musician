/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'abril-fatface': ['"Abril Fatface"', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};
