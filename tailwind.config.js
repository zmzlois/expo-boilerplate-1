/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/tailwind')

module.exports = {
  content: [
    './app.tsx',
    './app/**/*.{js,jsx,ts,tsx}',
    './etc/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [nativewind],
}
