const path = require("path");
module.exports = {
    entry: "./src/index.js",
    outpout:{
        path: path.resolve(__dirname,"dist"),
        filename: "main.js"
    },
    module: {
        rules: [
         
          {
            test: /\.css$/,
            exclude:  /node_modules/,
            use: [
              'style-loader',
              'css-loader',
             ],
             include: path.resolve(__dirname, '../'),
          },
        ],
      }

}