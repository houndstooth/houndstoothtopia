const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {presets:["@babel/preset-env"]},
            },
            {
                test: /\.obj$/,
                loader: 'raw-loader',
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({NODE_ENV: 'development'}),
    ],
    devServer: {
        static: path.join(__dirname, './dist'),
        open: true,
    }
}
