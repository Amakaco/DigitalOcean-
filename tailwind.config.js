/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./assets/pics/todoist logo (17).png')",
      },
      animation: {
        animation: "",
      },
    },
  },
  plugins: [],
};
