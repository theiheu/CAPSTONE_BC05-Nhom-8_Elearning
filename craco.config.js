module.exports = {
  mode: "development",
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  devServer: {
    port: 8000,
  },
};
