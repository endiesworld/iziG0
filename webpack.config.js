const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:{
        main: "./src/index.js",
        vendorCode: "./src/vendorCode.js" 
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[contentHash].bundle.js" //[contentHash is to eliminate caching by the the browser after we carry out a modification on our code]
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', // loads the final js file as a style sheet into DOM
            'css-loader', // converts css into js file
            'sass-loader' // Turns scss into css
           ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader', //for loading image files
                options:{
                    name: "[name].[hash].[ext]",
                    outputPath: "images"
                }
              },
            ],
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader', // html file loader reads all html contents and requires them by chosing suitable file loaders
              
            }
          }
        ],
      },
      plugins: [ new CleanWebpackPlugin(),// To clean up the dist folder after each build.
        new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      }// HTML plugins loads html files dynamically to dist folder
      )] 
};