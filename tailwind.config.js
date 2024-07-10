/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      raleway: "'Raleway', sans-serif",
      merriweather:  "Merriweather', serif"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
