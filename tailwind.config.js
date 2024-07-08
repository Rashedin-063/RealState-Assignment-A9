/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
