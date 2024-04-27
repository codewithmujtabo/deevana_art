/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "gallery.html"],
  theme: {
    extend: {
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        "eb-garamond": ["EB Garamond", "serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
