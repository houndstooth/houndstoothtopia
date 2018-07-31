const path = require('path')
const webpack = require('webpack')

module.exports = {
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
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, './dist'),
    }
}
