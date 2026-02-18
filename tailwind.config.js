/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^(bg|text)-(amber|sky|blue|gray)-\d+/ },
    'bg-sky-blue',
    'bg-gray-300',
    'w-2',
    'w-8',
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1e3a8a',
        'sky-blue': '#0ea5e9',
        'accent-gold': '#f59e0b',
        'accent-orange': '#f97316',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
