const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const {VueLoaderPlugin} = require("vue-loader/dist/index");


module.exports = {
    target: "web",
    // A method to watch when code is changed, the site will be effect.
    // watch:true,
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname, "../build"),
        filename:"js/bundle.js"
    },
    
    resolve: {
        // modules: ["nodemodule"],
        //当添加extensions里的后缀后，import时可以不写后缀
        extensions: [
            ".js", ".json", ".mjs", ".vue"
        ],
        //别名可以设置路径的别名
        alias: {
            "@": path.resolve(__dirname,"../src"), //需要些./src的时候可以写成@

        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //{loader:"style-loader"}
                    "style-loader",
                    "css-loader",
                    // {
                    //     loader:"css-loader",
                    //     options: {
                    //         esModule: false
                    //     }
                    // },
                    "postcss-loader"
                    // {
                    //     loader:"postcss-loader",
                    //     options:{
                    //         postcssOptions:{
                    //             plugins:[
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test:/\.less/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|bmp)/,
                // use:[
                //     {
                //         loader:"file-loader",
                //         options: {
                //             name: "[name].[hash:6].[ext]",
                //             outputPath: "img"
                //         }
                //     }
                // ]
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                }
            },
            {
                test: /\.svg$/,
                type: "asset",
                generator: {
                    filename: "svg/[name]_[hash:4][ext]"
                },
                // parser: {
                //     dataUrlCondition:{
                //         maxSize: 400 * 1024 //4Kb
                //     }
                    
                // }
            },
            {
                test: /\.ttf/,
                type: "asset",
                generator: {
                    filename: "font/[name][ext]"
                }
            },
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: "babel-loader",
            //             options: {
            //             //     plugins: [
            //             //         "@babel/plugin-transform-arrow-functions",
            //             //         "@babel/plugin-transform-block-scoping",
            //             //     ]
            //                 presets: [
            //                     "@babel/preset-env"
            //                 ]
            //             }
                        
            //         }
            //     ]
            // }
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new DefinePlugin({
            myname: "'good hcy'",
            __VUE_OPTIONS_API__  : true,
            __VUE_PROD_DEVTOOLS__ : false,
        }),
        
        new VueLoaderPlugin(),
    ]
}   