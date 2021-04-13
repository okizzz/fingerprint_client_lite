const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "staticservice.info", template: "src/index.html" }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/oval.svg", to: "oval.svg" }],
    }),
  ],
  devServer: {
    overlay: true,
  },
};
