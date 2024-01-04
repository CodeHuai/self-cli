const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map', // 调试代码时候可以好看代码
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                    ],
                                ],
                            },
                        },
                    }
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 esModule: false,
            //                 name: '[name]_[hash:6].[ext]'
            //             },
            //         }
            //     ],
            //     type: 'javascript/auto'
            // },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //                 name: '[name]_[hash:6].[ext]'
            //             },
            //         },
            //     ],
            //     type: 'javascript/auto'
            // },
            {
                // webpack5 相关的loader
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10000,
                    },
                },
                generator: {
                    filename: 'img/[name].[hash:8][ext]',
                },
            },
            // {
            // // file-loader 处理字体图片
            //     test: /\.(eot|ttf|woff2?)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: 'font/[name]_[hash:6].[ext]'
            //         }
            //     }
            // },
            {
                // asset/resource 处理字体图片
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: 'font/[name]_[hash:6][ext]'
                }
            }
        ],
    }
}