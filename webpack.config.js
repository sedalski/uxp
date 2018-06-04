const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                            // options: {
                            //     importLoaders: 1,
                            //     sourceMap: true
                            // }
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                server: {
                    baseDir: "./dist"
                }
            }
        ),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
};