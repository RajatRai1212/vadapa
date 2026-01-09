/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFF4E6",
          card: "#FFFDF8",
          border: "rgba(120,72,34,0.16)",
          text: "#241A10",
          muted: "#5C4A3A",
          subtle: "#7A6352",
          saffron: "#F59E0B",
          chili: "#E11D48",
          chutney: "#16A34A",
          chai: "#A16207"
        }
      },
      boxShadow: {
        soft: "0 18px 40px rgba(146, 74, 24, 0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
