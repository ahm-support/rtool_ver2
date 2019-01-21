var path = require('path');
var webpack = require('webpack');


module.exports = {
    node: {
        fs: 'empty'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    entry: [
        './src/js/index.js'
    ],
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            //...
        })
    ],
    devServer: {
        inline: true,
        port: 3333,
        historyApiFallback: true
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            "presets": [
                                "es2015"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'  //order very imp - loads from bottom to top
                ]
            }
        ]
    }
};
