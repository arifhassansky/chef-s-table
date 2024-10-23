/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/banner.jpg')",
      },
      colors: {
        primary: "#0BE58A",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
