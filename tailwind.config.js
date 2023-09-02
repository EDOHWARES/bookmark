/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        textColor: "rgba(255, 255, 255, 0.87)"
      }
    },
  },
  plugins: [],
}

