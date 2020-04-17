'use strict';

/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Loading various modules required by webpack to bundle the project.
|
| path                      - provides utilities for working with file and directory paths
| Dotenv                    - wraps node dotenv module to resolve when bundling a project
| VueLoaderPlugin           - handles Vue Single-File Components (SFCs) when bundling a project
| MinifyPlugin              - minify optimise specified files
|
*/
require('dotenv').config();
const path                         = require('path');
const Dotenv                       = require('dotenv-webpack');
const { VueLoaderPlugin }          = require('vue-loader');
const MinifyPlugin                 = require('babel-minify-webpack-plugin');


/**
 * Webpack config
 *
 * @type {{
 *      mode: string,
 *      entry: string[],
 *      output: {path: string, filename: string},
 *      module: {rules: *[]}
 *      plugins: any[],
 *      node: {fs: string},
 * }}
 */
module.exports = {

    // Environment
    mode: 'production',

    // Files to bundle
    entry: ['./src/app.js'],

    // Output directory/file name
    output: {
        path: path.resolve(__dirname, '../../public'),
        filename: 'app.js',
        publicPath: '/'
    },

    // Used modules
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        ignore: [],
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    forceAllTransforms: true
                                }
                            ]
                        ]
                    }
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
                use: 'url-loader?name=assets/[name].[ext]'
            }
        ]
    },

    // Used plugins
    plugins: [

        // Vue webpack compatibility
        new VueLoaderPlugin(),

        // Define path to .env
        new Dotenv({
            path: path.resolve(__dirname, '../../.env')
        }),

        // Babel minify plugin
        new MinifyPlugin(),
    ],

    // FS module config
    node: {
        fs: 'empty'
    }
};