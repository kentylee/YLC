/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./pages/**/*.tsx",
    "./components/**/*.tsx"
    ],
    theme: {
    extend: {
    colors: {
      gold: '#bfa046',
      charcoal: '#2b2b2b',
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
}
