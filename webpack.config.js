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
                test: /\.(obj|png)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.EnvironmentPlugin({
            'PERFORMANCE_TEST': false,
            'PERFORMANCE_TEST_BASE_PERFORMANCE': false,
        })
    ],
    devServer: {
        port: process.env.DEV_SERVER_PORT,
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, './dist'),
    }
}
