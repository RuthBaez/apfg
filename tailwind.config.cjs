/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FF4646",
          dark:"#AA0000",
        },
        secondary: "#B80505",
      },
      fontFamily: {
        bebas: "'Bebas Neue', sans-serif",
        dm: "'DM Sans', sans-serif",
        inter: " 'Inter', sans-serif",
        krub: "'Krub', sans-serif",
        rubik: "'Rubik', sans-serif",
        sansita: "'Sansita Swashed', cursive",
        actor: "'Actor', sans-serif",
        antonio: "'Antonio', sans-serif",
      },
    },
  },
  plugins: [],
};
