/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#ffce0a",

            "secondary": "#a7e8e8",

            "accent": "#d4e587",

            "neutral": "#25222A",

            "base-100": "#3E3B3F",

            "info": "#7AC1F0",

            "success": "#179271",

            "warning": "#F7D426",

            "error": "#F24A6E",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}