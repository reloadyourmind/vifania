const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './assets/index.tsx',
    devtool: 'source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.css', '.ts', '.js', '.json', '.tsx'],
        alias: {
            assets: path.resolve(__dirname, 'assets'),
        },
    },
    devServer: {
        compress: false,
        host: '0.0.0.0',
        port: 3000,
    },
    watchOptions: {
        poll: 1000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'public/dist/index.html'),
            template: path.resolve(__dirname, 'assets/core/index.html'),
        }),
        new MiniCssExtractPlugin({
            attributes: {
                id: 'target',
                'data-target': 'example',
            },
        }),
    ],
};
