const production = !process.env.ROLLUP_WATCH;

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  purge: {
    content: [
      "./src/**/*.svelte",
      "./src/**/*.html"
    ],
    enabled: production,
  },
  plugins: [],
}