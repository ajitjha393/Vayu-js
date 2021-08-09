const path = require("path");
const webpack = require('webpack')


require('dotenv').config({ path: './.env' }); 


module.exports = env => ({
  mode: env === "production" ? "production" : "development",
  entry: {
    index: "./index.js"
  },
  output: {
    filename: "./[name].bundle.js",
    path: path.resolve(__dirname)
  },
  devServer: {
    contentBase: "./"
  },
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { chrome: "69" },
                  shippedProposals: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
  
  devtool: "cheap-module-source-map"
});