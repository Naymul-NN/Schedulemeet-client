/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "500px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      xmd: "860px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: [
    {
      lightTheme: {
        primary: "#e500ff",
        secondary: "#00aaff",
        accent: "#0097b3",
        neutral: "#000816",
        "base-100": "#f2ffff",
        info: "#00b9de",
        success: "#1ef79a",
        warning: "#c39b00",
        error: "#ff8091",
      },
      darkTheme: {
        primary: "#00d099",
        secondary: "#00e700",
        accent: "#00af00",
        neutral: "#1a1300",
        "base-100": "#232329",
        info: "#5cd6ff",
        success: "#00ef94",
        warning: "#cd6400",
        error: "#dd3859",
      },
    },
  ],
};
