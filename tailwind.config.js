// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 5s linear infinite", // Define custom spin animation
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      screens: {
        xs: "476px",
        sm: "640px",
        md: "768px",
        mk: "785px",
        bs: "900px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",

        "2xl-mx": { max: "1535px" },
        "xl-mx": { max: "1279px" },
        "lg-mx": { max: "1023px" },
        "md-mx": { max: "767px" },
        "sm-mx": { max: "639px" },
        "xs-mx": { max: "475px" },
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        bgColor: "#0A192F",
        primaryColor: "#64FFDA",
        textColor: "#8892B0",
      },
    },
  },
  plugins: [],
};
