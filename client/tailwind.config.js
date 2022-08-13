module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        // "hero-pattern": "url('/img/hero-pattern.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },

      animation: {
        spin: "spin 1s linear infinite",
      },

      keyframes: {
        spin: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
