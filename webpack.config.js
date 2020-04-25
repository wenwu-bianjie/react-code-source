const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');


module.exports ={
    entry: './src/index.js',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'src/react/'),
            'react-dom': path.resolve(__dirname, 'src/react-dom/'),
            'object-assign': path.resolve(__dirname, 'src/object-assign/'),
            'prop-types': path.resolve(__dirname, 'src/prop-types/'),
            'scheduler': path.resolve(__dirname, 'src/scheduler/')
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            __DEV__: false,
            __PROFILE__: true,
            __UMD__: true
        }),
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        port: 8088,
        host: "localhost",
    }
};