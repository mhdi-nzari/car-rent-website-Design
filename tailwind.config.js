/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./*.html"],
  theme: {
    fontSize: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
    },

    extend: {
      spacing: {
        12: "12px",
        16: "16px",
      },

      boxShadow: {
        def: "8px 8px 24px rgba(149,157,165,0.2) ;",
      },

      backgroundImage: {
        "banner-pattern": "url('/src/image/BG.png')",
      },
      colors: {
        "secondary-300": "#90A3BF        ",
        "secondary-400": "#596780",
        "secondary-500": "#1A202C",
        "information-500": "#54A6FF",
        "primary-500": "#3563E9",
      },
    },
  },
  plugins: [],
};
