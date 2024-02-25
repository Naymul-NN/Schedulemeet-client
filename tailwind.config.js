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
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#8BC34A", // Light green
          secondary: "#03A9F4", // Light blue
          accent: "#FF9800", // Deep orange
          neutral: "#F5F5F5", // Light gray (changed for better contrast)
          "base-100": "#263238", // Dark blue gray
          info: "#2196F3", // Blue
          success: "#4CAF50", // Success
          warning: "#FFEB3B", // Yellow
          error: "#F44336", // Red
        },
        lightTheme: {
          primary: "#4CAF50", // Green
          secondary: "#2196F3", // Blue
          accent: "#FF5722", // Orange
          neutral: "#263238", // Dark blue gray (changed for contrast)
          "base-100": "#FFFFFF", // White
          info: "#03A9F4", // Light blue
          success: "#8BC34A", // Light green
          warning: "#FFC107", // Amber
          error: "#FF5252", // Red
        },
      },
    ],
  },
};

// Primary, Secondary, and Accent Colors: These colors are chosen to provide variety and visual interest while ensuring key elements stand out.
// Base-100 and Neutral Colors: These colors serve as the background and base for the interface, providing contrast for content and maintaining visual balance.
// Error, Info, Success, and Warning Colors: These colors help communicate different states or messages to users, such as error alerts, informational messages, successful actions, and warnings.
