/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "380px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
