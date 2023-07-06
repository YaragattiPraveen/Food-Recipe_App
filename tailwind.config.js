/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"],
      },
      colors: {
        "custom-green": "#32b768",
        "rich-black": "#000000",
        "section-bg-color": "#f8f9fb",
        "bg-shadow-color": "#e6f6ed",
        "content-color": "#686868",
        "rich-white": "#fefefe",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "ping-slow": "ping 5s cubic-bezier(1, 1, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
