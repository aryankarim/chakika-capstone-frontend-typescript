module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chakikaLightGreen: {
          DEFAULT: "#D4EDE8",
          opaque: "#D4EDE890",
        },
        chakikaDarkGreen: {
          DEFAULT: "#2A6559",
          darker: "#24564C",
        },
        chakikaPurple: {
          DEFAULT: "#BB8BBB",
        },
        chakikaRed: {
          DEFAULT: "#FF6A6A",
        },
        chakikaGrey: {
          DEFAULT: "#E0E0E1",
        },
      },
    },
  },
  plugins: [],
};
