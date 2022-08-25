/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#2B2F4A',
        'light': '#FAFAFA',
        'extra-light': '#EAEBED',
        'green': '#32D264',
        'blue': '#2BB8D5',
      },
      backgroundImage: {
        'nav': 'url("../src/assets/bg-pattern-mobile-nav.svg")',
        'header-top': 'url("../src/assets/bg-pattern-intro-left.svg")',
        'section': 'url("../src/assets/bg-pattern-how-we-work.svg")',
        'footer': 'url("../src/assets/bg-pattern-footer.svg")',
      },
    },
  },
  plugins: [],
};
