/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#2B2F4A',
        'light': '#FAFAFA',
        'extra-light': '#F4F5F7',
        'green': '#32D264',
        'blue': '#2BB8D5',
      },
      backgroundImage: {
        'header': 'url("../src/assets/bg-pattern-mobile-nav.svg")',
      },
    },
  },
  plugins: [],
};
