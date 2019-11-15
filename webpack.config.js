const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "main.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader','css-loader','sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },

};