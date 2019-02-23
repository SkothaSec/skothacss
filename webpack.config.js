const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    target: "node",
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "src")],
        extensions: [".js"],
        alias: {
            "@skothacss": path.resolve(__dirname, "css/skothacss"),
            "@components": path.resolve(__dirname, "src/components"),
            "@scss": path.resolve(__dirname, "src/scss"),
            "@img": path.resolve(__dirname, "src/img"),
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: './',
        watchContentBase: true,
        hot: true,
        port: 3000
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].scss"
        }),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Skotha CSS",
            template: (__dirname, 'index.html'),
            filename: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.[sa|sc|c]ss$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash:8].[ext]",
                            outputPath: "assets/"
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: "svg-url-loader",
                options: {
                    noquotes: true
                }
            }
        ]
    },
    watch: true
};
