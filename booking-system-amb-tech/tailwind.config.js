/** @type {import('tailwindcss').Config} */

const globSync = require("glob").sync;

module.exports = {
  content: ["./App.tsx", ...globSync("./pages/**/*.{js,jsx,ts,tsx}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
