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
        primary: "#4CAF50", //green
        secondary: "#2196F3", //blue
        accent: "#FF5722", //orange
        neutral: "#E0E0E0 ", //light gray
        "base-100": "#FFFFFF ", //white
        info: "#03A9F4 ", //light blue
        success: "#8BC34A ", //light green
        warning: "#FFC107 ", //amber
        error: "#FF5252", //red
      },
      darkTheme: {
        primary: "#8BC34A ", //light green
        secondary: "#03A9F4", //light blue
        accent: "#FF9800 ", //deep orange
        neutral: "#546E7A ", //medium blue gray
        "base-100": "#263238 ", //dark blue gray
        info: "#2196F3 ", //blue
        success: "#4CAF50 ", //success
        warning: "#FFEB3B ", //yellow
        error: "#F44336 ", //red
      },
    },
  ],
};

// Primary, Secondary, and Accent Colors: These colors are chosen to provide variety and visual interest while ensuring key elements stand out.
// Base-100 and Neutral Colors: These colors serve as the background and base for the interface, providing contrast for content and maintaining visual balance.
// Error, Info, Success, and Warning Colors: These colors help communicate different states or messages to users, such as error alerts, informational messages, successful actions, and warnings.