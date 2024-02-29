/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Purple": "#f5f2ff",
        "primaryBG": "#0a090b"
      },
      fontFamily:{
        'primary': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

