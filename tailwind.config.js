/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand colors from your color style guide
        "purple-primary": "#7040ea",
        "purple-secondary": "#897fd8",
        "blue-light": "#9fe7ff",
        "blue-primary": "#3f9de6",

        // Additional UI colors
        dark: "#2D3748",
        light: "#F8FAFC",
        "off-white": "#FAFAFA",

        // Status
        success: "#38B2AC",
        warning: "#ED8936",
        error: "#E53E3E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-axiforma)", "system-ui", "sans-serif"],
        accent: [
          "var(--font-poppins)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #7040ea, #897fd8)",
        "gradient-secondary": "linear-gradient(to right, #7040ea, #3f9de6)",
        "gradient-blue": "linear-gradient(to right, #9fe7ff, #3f9de6)",
      },
      animation: {
        "gradient-shift": "gradient-shift 3s ease infinite",
        "bounce-slow": "bounce 3s infinite",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
