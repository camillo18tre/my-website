const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{html,js,tsx}',
    './layouts/**/*.{html,js,tsx}',
    './components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arimo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
