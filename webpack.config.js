const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./assets/index.tsx",
    devtool: "source-map",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', ".tsx"]
    },
    devServer: {
        compress: false,
        host: "0.0.0.0",
        port: 3000,
    },
    watchOptions: {
        poll: 1000,
    },
    plugins: [new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, "public/dist/index.html"),
        template: path.resolve(__dirname, "public/dist/index.html"),
    })]
}
