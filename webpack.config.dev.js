const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');
const webpack = require('webpack');
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: false
    },
    devtool: 'eval',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});