/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#2C2640',
        'dark': '#2B282F',
        'light': '#FAFAFA',
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
