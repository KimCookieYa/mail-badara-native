/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: (() => {
        let widths = {};
        for (let i = 1; i <= 1000; i++) {
          widths[i] = `${i}px`;
        }
        return widths;
      })(),
      height: (() => {
        let height = {};
        for (let i = 1; i <= 1000; i++) {
          height[i] = `${i}px`;
        }
        return height;
      })(),
      padding: (() => {
        let padding = {};
        for (let i = 1; i <= 1000; i++) {
          padding[i] = `${i}px`;
        }
        return padding;
      })(),
      margin: (() => {
        let margin = {};
        for (let i = 1; i <= 1000; i++) {
          margin[i] = `${i}px`;
        }
        return margin;
      })(),
    },
  },
  plugins: [],
};
