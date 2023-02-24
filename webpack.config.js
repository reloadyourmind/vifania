const path = require('path');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, './assets', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
            'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
        }),
    ].filter(Boolean),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/dist')
    }
}
