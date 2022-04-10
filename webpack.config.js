const webpack = require("webpack");
const path = require("path");

module.exports = {
    plugins: [ 
        new webpack.ProvidePlugin({ 
            "jQuery": "jquery", 
            "window.jQuery": "jquery", 
            "jquery": "jquery", 
            "window.jquery": "jquery", 
            "$": "jquery", 
            "window.$": "jquery" 
        }) 
    ],
    
    entry: {
        // main: "./#src/js/index.js",
        main:[
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './#src/js/index.js'
        ]
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //loader: ['babel-loader','react-hot']
                    loader: require.resolve("babel-loader"),
                    // query: {
                    //     presets: [
                    //         ["@babel/preset-env", { modules: false }]
                    //     ]
                    // }
                },

            }
        ],
        // loaders: [
        //     {
        //         test: /\.js?$/,
        //         exclude: /node_modules/,
        //         loaders: ['react-hot', 'babel']
        //     }
        // ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "#src/blocks/modules")
        }
    }
};
