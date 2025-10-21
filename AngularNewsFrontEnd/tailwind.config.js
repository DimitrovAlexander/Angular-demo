// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Твоят основен цвят (напр. Indigo 600)
        "primary-hover": "#4338CA", // По-тъмен нюанс за hover ефект
        secondary: "#F97316", // Твоят вторичен цвят (напр. Orange 500)
        "secondary-hover": "#F59E0B",
      },
    },
  },
  plugins: [],
};
