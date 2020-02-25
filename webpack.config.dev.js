const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 9000
    }
});