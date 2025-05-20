/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Вмикаємо підтримку темного режиму
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };