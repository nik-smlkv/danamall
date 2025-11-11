/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Твои токены цветов (пример)
        brand: {
          primary: "#1C1C1C",
          accent: "#A37C4A",
          bg: "#F7F5F2",
        },
        text: {
          base: "#1C1C1C",
          muted: "#6B7280",
          inverted: "#FFFFFF",
        },
      },
      fontFamily: {
        // Подставь свои шрифты позже
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
