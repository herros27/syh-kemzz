/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bg': '#d6d3d1',
      'white': '#ffffff',
      'card': '#a8a29e',
      'midnight': '#292524',
      'metal': '#565584',
      'tag': '#1c1917',
      'silver': '#ecebff',
      'text-tag': '#78716c',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}