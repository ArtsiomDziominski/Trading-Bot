/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0d7ff2",
        "accent-orange": "#FFB11A",
        "trading-green": "#0bda5b",
        "trading-red": "#ff4d4f",
        "background-light": "#f5f7f8",
        "background-dark": "#0b0e11",
        "card-dark": "#1e2329",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
    },
  },
}
