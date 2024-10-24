/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        section1: "url('/public/imgs/section1.avif')",
        section2: "url('/public/imgs/section2.avif')",
        section3: "url('/public/imgs/section3.avif')",
        section4: "url('/public/imgs/section4.avif')",
      },
    },
  },
  plugins: [],
};
