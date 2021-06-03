const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    resolve: {
        alias: {
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: [
                    {
                       loader: MiniCssExtractPlugin.loader,
                       options: {publicPath: path.relative(__dirname, '../')},
                    },
                    'css-loader',
                   ],
                
            },
            {
                test: /\.(png|jpg|jpge|svg)$/,
                type: 'asset/resource'
            },
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackplugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        host: '192.168.0.144',
        port: 3006,
        open: true,
    }
}
