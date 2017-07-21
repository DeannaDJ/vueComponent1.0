/**
 * Created by zeng on 2016/5/9.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        appVueDemo: __dirname + '/src/pages/appVueDemo',
        webVueDemo: __dirname + '/src/pages/webVueDemo'
    },
    output: {
        path: 'build',
        filename: '/pages/[name]/index.js'
    },
    devtool: 'eval',
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js?$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss?$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.css?$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.less?$/,
            loaders: ['style', 'css', 'sass', 'less']
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8192&name=[path][name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.html', '.vue', '.css', '.scss', '.less'],
        alias: {
            appComponent: __dirname + "/src/components/app",
            webComponent: __dirname + "/src/components/web",
            css: __dirname + "/src/css"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("pages/[name]/index.css")
    ]
};
