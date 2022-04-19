const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      title: "Okra Popup",
      template: path.resolve(__dirname, "index.html"),
    }),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [isDev && require.resolve("react-refresh/babel")].filter(
                Boolean
              ),
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "okra.js",
    clean: true,
    library: {
      name: "okra",
      type: "umd",
    },
  },
  devServer: {
    hot: true,
    static: path.resolve(__dirname, "./dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
